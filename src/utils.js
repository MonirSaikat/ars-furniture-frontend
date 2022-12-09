import swal from 'sweetalert';

export const handleError = (error) => {
  const errorCode = error.code || 'Error';
  const errorMessage = error.message;
  swal(errorCode, errorMessage, "error");
};

export const handleSuccess = (message) => {
  swal("Success", message, "success");
};
