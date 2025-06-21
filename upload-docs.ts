import "dotenv/config";
import { Langbase } from "langbase";
import { readFile } from "fs/promises";
import path from "path";

const langbase = new Langbase({
  apiKey: process.env.LANGBASE_API_KEY!,
});

async function main() {
  const cwd = process.cwd();
  const memoryName = "knowledge-base";

  const agentArchitecture = await readFile(
    path.join(cwd, "docs", "architechture-agent.txt")
  );
  const agentResult = await langbase.memories.documents.upload({
    memoryName,
    contentType: "text/plain",
    documentName: "architechture-agent.txt",
    document: agentArchitecture,
    meta: { category: "Examples", topic: "Agent architecture" },
  });

  console.log(agentResult.ok ? "✓ Agent doc uploaded" : "✗ Agent doc failed");

  const langbaseFaq = await readFile(
    path.join(cwd, "docs", "langbase-faq.txt")
  );
  const faqResult = await langbase.memories.documents.upload({
    memoryName,
    contentType: "text/plain",
    documentName: "langbase-faq.txt",
    document: langbaseFaq,
    meta: { category: "Support", topic: "Langbase FAQs" },
  });

  console.log(faqResult.ok ? "✓ FAQ doc uploaded" : "✗ FAQ doc failed");
}

main();
