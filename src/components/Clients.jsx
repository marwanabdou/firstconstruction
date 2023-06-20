import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
  <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client) => (
      <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 relative`}>
        <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50`}></div>
      </div>
    ))}
  </div>
</section>
);

export default Clients;
