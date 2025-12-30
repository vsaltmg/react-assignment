type CardProps = {
  length: number;   // height in px
  breadth: number;  // width in px
  children?: React.ReactNode;
};

const Card = ({ length, breadth, children }: CardProps) => {
  return (
    <div
      style={{
        height: `${length}px`,
        width: `${breadth}px`,
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#213448",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
