import dotenv from "dotenv";
import fs from "fs";
import matter from "gray-matter";
import { OpenAI } from "openai";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODEL = "gpt-4o-mini";

const SYSTEM_MESSAGE = `You are a skilled translator specializing in English to Spanish (Spain) translations. Your task is to translate the given text while adhering to the following guidelines:

1. Maintain the original tone and style of the text.
2. Use modern, natural Spanish as spoken in Spain.
3. Incorporate common Spanish expressions where appropriate.
4. Avoid literal translations that might sound unnatural.
5. Preserve any technical terms or proper nouns in their original form unless there's a widely accepted Spanish equivalent.
6. Maintain the original formatting and structure of the text.
7. Do not translate technical terms or proper nouns that are commonly used in English.
8. Code snippets or commands are exceptions and should not be translated.
9. Preference common Spanish words over less common synonyms. Avoid overly complex or archaic language.

Your translation should read as if it were originally written in Spanish by a native speaker.`;

async function translateText(text: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: SYSTEM_MESSAGE },
        { role: "user", content: text },
      ],
    });

    return response.choices[0].message?.content || "";
  } catch (error) {
    console.error("Error translating text:", error);
    throw error;
  }
}

async function translateMarkdownFile(
  inputPath: string,
  outputPath: string,
): Promise<void> {
  try {
    // Read the markdown file
    const fileContent = fs.readFileSync(inputPath, "utf-8");

    // Parse front matter and content
    const { data: frontMatter, content } = matter(fileContent);

    // Translate title and description in front matter
    const translatedTitle = await translateText(frontMatter.title);
    const translatedDescription = await translateText(frontMatter.description);

    // Translate main content
    const translatedContent = await translateText(content);

    // Prepare translated front matter
    const translatedFrontMatter = {
      ...frontMatter,
      title: translatedTitle,
      description: translatedDescription,
    };

    // Combine translated front matter and content
    const translatedFileContent = matter.stringify(
      translatedContent,
      translatedFrontMatter,
    );

    // Write the translated content to the output file
    fs.writeFileSync(outputPath, translatedFileContent);

    console.log(`Translation completed. Output saved to: ${outputPath}`);
  } catch (error) {
    console.error("Error processing markdown file:", error);
  }
}

// Main execution
const inputPath = process.argv[2];
if (!inputPath) {
  console.error(
    "Please provide the input markdown file path as a command-line argument.",
  );
  process.exit(1);
}

const outputDir = path.join(__dirname, "../content/posts/es");
const outputPath = path.join(outputDir, path.basename(inputPath));

translateMarkdownFile(inputPath, outputPath);
