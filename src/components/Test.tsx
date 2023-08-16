import styles from "./Test.module.scss";

const renderItems = new Map();
renderItems.set(1, <p className={styles.TestH1Styles}>uno</p>);
renderItems.set(2, "dos");
renderItems.set(3, "tres");

export function Test() {
  // manejar arreglos
  // const numbers = [
  //   { id: 1, value: 1 },
  //   { id: 2, value: 2 },
  //   { id: 3, value: 3 },
  //   { id: 4, value: 4 },
  // ];

  // condicionales
  // const showNumbers = true;

  const multipleConditionsInit = (itemToGet: number) => {
    // condicionales multiples
    return renderItems.has(itemToGet) ? (
      renderItems.get(itemToGet)
    ) : (
      <p>no existe</p>
    );
  };

  return <>{multipleConditionsInit(2)}</>;
}
