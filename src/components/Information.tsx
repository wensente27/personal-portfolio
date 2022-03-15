/* Import data */
import information from "../data/information";

const Information: React.FC = () => {
  return (
    <>
      {information.map((item, _) => (
        <div key={_}>
          <h3 className="text-lg text-white">{item.title}</h3>
          <span className="font-light text-[#737373]">{item.value}</span>
        </div>
      ))}
    </>
  );
};

export default Information;
