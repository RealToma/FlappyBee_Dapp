import "./Loading.css";

const LoadingEffectMain = ({ text }: any) => {
  return (
    <div className="content_loading">
      <div className="ring_loading">
        {text}
        <span className="page_loading_spin"></span>
      </div>
    </div>
  );
};

export default LoadingEffectMain;
