import dayjs from 'dayjs';
import millify from 'millify';

// USAGE: numberFormatter(200000) -> 200,000
export const numberFormatter = (value: string | number = '') =>
  value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//https://day.js.org/
export const dateFormatter = (
  value: string | Date | null,
  dateFormat: string,
): string | false | any => value !== undefined && dayjs(value).format(dateFormat);

// USAGE: millifyFormatter(200000) -> 200k
export const millifyFormatter = (value: number) => millify(value);

// convert er 0 -> 00.0%
export const computePercentage = (value: number) => {
  const percentage = value * 100;

  return parseFloat(percentage.toFixed(2));
};

// download assets
export const handleDownloadClick = async (dataURL: string, fileName: string) => {
  try {
    const response = await fetch(dataURL);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const lastDotIndex: number = dataURL.lastIndexOf('.');
    const extension: string = lastDotIndex === -1 ? '' : dataURL.substring(lastDotIndex + 1);

    link.href = objectUrl;
    link.download = `${fileName}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading file', error);
  }
};

// Check if the object is empty by checking if all its values are empty
export const isObjectEmpty = (data: { [key: string]: string }): boolean => {
  for (const key in data) {
    if (data[key] !== '') {
      return false;
    }
  }
  return true;
};

// Function to clear both local storage and session storage
export const clearLocalStorageAndSessionStorage = () => {
  // Clear local storage
  localStorage.clear();

  // Clear session storage
  sessionStorage.clear();
};

// email checker
export const isValidEmailChecker = (value: string) => {
  if (!value && value.length === 0) {
    return 'This field is required';
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return 'Email is not valid';
  }

  return null;
};
