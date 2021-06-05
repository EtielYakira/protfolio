function ErrorMessages({ errors }) {
  return errors.map((error, index) => (
    <small key={index} className="form-text text-mute">
      {error}
    </small>
  ));
}

export default ErrorMessages;
