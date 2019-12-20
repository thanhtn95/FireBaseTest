export class FileUpload {
  file: File;
  progress: number;

  constructor(file: File) {
    this.file = file;
  }
}
