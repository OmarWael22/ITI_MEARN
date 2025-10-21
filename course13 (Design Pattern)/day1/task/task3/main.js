import { Document } from "./document.js";
import { DocumentPrototype } from "./proto.js";
let doc = new Document(
  "Report Header",
  "Report Footer",
  10,
  "This is the report text."
);
let proto = new DocumentPrototype(doc);

// Clone the document
let clonedDoc = proto.clone();

// You can modify clonedDoc independently
clonedDoc.text = "This is the cloned document text.";

console.log("Original Document:");
doc.display();

console.log("\nCloned Document:");
clonedDoc.display();
