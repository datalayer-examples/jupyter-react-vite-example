import { Buffer } from "buffer";
import Process from "process";

globalThis.Buffer = Buffer;
globalThis.process = Process;

globalThis.__webpack_public_path__ = ""