import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x0043ccb97228dd592664e0c8bb5b8960C12acD02",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "ISLAM 3.0 Access Token",
        description: "This NFT will give you access to ISLAM 3.0 DAO community",
        image: readFileSync("scripts/assets/dao-access-token.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
