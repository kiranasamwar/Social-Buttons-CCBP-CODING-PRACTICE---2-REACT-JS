const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons </h1>
      <div className="buttons_container-edit">
        <Button buttonText="Like" className="button like-button" />
        <Button buttonText="Comment" className="button comment-button" />
        <Button buttonText="Share" className="button share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
