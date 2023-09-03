import {defineConfig} from "vite"
import path from "path"
// vite接入
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
})