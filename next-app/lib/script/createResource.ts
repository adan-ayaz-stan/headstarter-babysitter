"use server";

import { createResource } from "../actions/resources";

// export interface DataItem {
//   url: string;
//   markdown: string;
//   metadata: Metadata;
// }

// export interface Metadata {
//   lastModifiedHeader: any;
//   etag: string;
//   contentLength: any;
//   lastModifiedHtml: any;
// }

// export interface EmotionItem {
//   input: string;
//   output: string;
//   instruction: string;
// }

export async function create() {
  try {
    console.log("Creating resources...");
    //   Loop over data and create resource in the database - NEXT JS Docs
    // for (let i = 0; i < (data as DataItem[]).length; i++) {
    //   const item = (data as DataItem[])[i];

    //   console.log("Creating resource: " + i + "\n" + item.url);
    //   await createResource({
    //     content: item.markdown + "\n" + "Check out blog at: " + item.url,
    //   });
    // }

    // for (let i = 0; i < (emotionData as EmotionItem[]).length; i++) {
    //   const item = (emotionData as EmotionItem[])[i];
    //   console.log("Creating resource: " + i + "\n" + item.instruction);

    //   const strItem = `Question: ${item.instruction}\nAnswer: ${item.output}`;
    //   await createResource({ content: strItem });
    // }

    console.log("Done!");
  } catch (err) {
    console.error(err);
  }
}
