export const errorHandler = (error) => {
    let errorMessage = 'Something went wrong, please try again later';

    if (error.message) errorMessage = error.message;
}