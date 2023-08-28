import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { FilePondFile } from 'filepond';
import PropTypes from 'prop-types';
const FileUploadZone = ({ filesUploaded, setFilesUploaded }) => {
  const handleInit = () => {
    console.log('FilePond instance has initialised');

  }
  const handleFileUpload = (newlyUploadedFiles: FilePondFile[]) => {
    const newFileList = filesUploaded.slice();
    newlyUploadedFiles.map((file: FilePondFile) => newFileList.push(file));
    setFilesUploaded(newFileList);
  }
  return (
    <FilePond credits={false}
      allowMultiple={true}
      server="/api"
      oninit={() => handleInit()}
      onupdatefiles={(newlyUploadedFiles) => handleFileUpload(newlyUploadedFiles)}
    />
  );
}
FileUploadZone.propTypes = {
  filesUploaded: PropTypes.array,
  setFilesUploaded: PropTypes.func
};
export default FileUploadZone;