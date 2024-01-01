import * as fs from "fs/promises";

//Creating directory / Folder;
try {
    await fs.mkdir();
    
} catch (error) {
    console.log(error);
}