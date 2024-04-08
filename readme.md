
# Overview
This project aims to collect a small but diverse set of documents that represents virtually every real-world use-case for digitizing documents with OCR.  The goal is to include a handful of every document type (e.g. book, academic paper, magazine), document layout (e.g. single column, multi-column, table), and scanning condition (e.g. screenshot, high-resolution scan, low-resolution scan).
# Motivation
Many corpuses used for benchmarking OCR contain a large number of homogenous documents.  For example, a benchmark may use a corpus of 10 thousand scanned academic papers.  This leads to benchmarks that are slow to run and produce the mere illusion of robust results.

There is no reason for a benchmark to include many documents that are essentially identical.  If an OCR program is 98% accurate for a single two-column English document scanned at 300DPI, it will likely produce similar results for other two-column English documents scanned at 300DPI.  Having 10,000 such documents does not make the benchmark more robust in a meaningful way.  The program may still perform extremely poorly with other types of documents--for example, documents with different layouts, documents that use a different vernacular, documents scanned at a different resolution, etc.
# Scope
The corpus may include all printed documents that a user may need to digitize using OCR.  This includes most document types--books, forms, receipts, newspapers, etc. 

The following types of images are **outside** the scope of this project.  In all cases, these document types are excluded because they present unique/specific challenges that are not broadly applicable to general document digitization use-cases. 
- Handwritten text
	- Most OCR programs do not work with handwritten text, and do not claim to support it.
- CAPTCHAs
	- CAPTCHAs are deliberately designed to be adversarial to common OCR programs.
- Pictures of non-documents
	- License plates, T-shirts, street signs, etc.
	- Traditional OCR programs are not designed for these types of applications, and are not the best approach.