import "./Loading.css";

const LoadingEffectMain = ({ text }: any) => {
  return (
    <div className="content_ring">
      <div className="ring">
        {text}
        <span className="page_load_spin"></span>
      </div>
    </div>
  );
};

export default LoadingEffectMain;
