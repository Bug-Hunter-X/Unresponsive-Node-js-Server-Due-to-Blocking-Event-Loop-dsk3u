# Unresponsive Node.js Server

This repository demonstrates a common Node.js issue where a long-running operation in the request handler blocks the event loop, causing the server to become unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Problem

The `bug.js` file creates a simple HTTP server.  However, the request handler contains a `while` loop that performs a computationally intensive task. This blocks the event loop, preventing the server from responding to subsequent requests or handling other events.  This leads to an unresponsive server.

## Solution

The `bugSolution.js` file demonstrates the correct approach using asynchronous operations with `setTimeout` to avoid blocking the event loop.  The long-running task is broken into smaller chunks using `setTimeout`, allowing the event loop to continue processing other events while the task is being executed.

This example highlights the importance of using asynchronous programming techniques in Node.js to prevent blocking the event loop and ensuring server responsiveness.