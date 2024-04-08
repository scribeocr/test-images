import { evalInternal } from 'scribeocr';
import { writeFile } from 'fs/promises';

/**
 * @param {string} fileName
 */
export function relToAbsPath(fileName) {
    const url = new URL(fileName, import.meta.url);
    return url.protocol === 'file:' ? url.host + url.pathname : url.href;
  }
  
/**
 * Converts an array of EvalMetrics objects to a CSV string and saves it to a file.
 * @param {EvalMetrics[]} metricsArray The array of EvalMetrics objects to be saved.
 * @param {string} filePath The path to the CSV file to be written.
 */
const saveMetricsToCsv = async (metricsArray, filePath) => {
    // Define the CSV header based on EvalMetrics properties
    const header = 'total,correct,incorrect,missed,extra,correctLowConf,incorrectHighConf\n';
    
    // Convert each EvalMetrics object into a CSV string
    const csvContent = metricsArray.reduce((acc, metrics) => {
        const row = `${metrics.total},${metrics.correct},${metrics.incorrect},${metrics.missed},${metrics.extra},${metrics.correctLowConf},${metrics.incorrectHighConf}\n`;
        return acc + row;
    }, header);
    
    await writeFile(filePath, csvContent);
};



const resArr = [];

resArr.push((await evalInternal('table/bill.png', 'table/bill.truth.hocr')).evalMetrics);
resArr.push((await evalInternal('receipt/receipt_3.png', 'receipt/receipt_3.truth.hocr')).evalMetrics);

saveMetricsToCsv(resArr, 'metrics.csv')
