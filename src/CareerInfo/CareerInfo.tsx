type CareerInfoProps = {
  timeframe: string;
  companyName: string;
  title: string;
  learnMore?: string;
  textColor: string;
  background: string;
};

const CareerInfo = ({
  timeframe,
  companyName,
  title,
  learnMore,
  textColor,
  background
}: CareerInfoProps) => {
  return (
    <div style={{
      background,
      color: textColor,
      padding: '3rem',
      borderRadius: '1rem',
    }}>
      <h6>{timeframe}</h6>
      <h3>{companyName}</h3>
      <h6>{title}</h6>
    </div>
  );
};

export default CareerInfo;
