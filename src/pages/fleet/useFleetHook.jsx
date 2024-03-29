import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseDb, firebaseStorage } from "../../firebase/firebase.config";
// import { carData } from "../../firebase/firebase.database";
import { useEffect } from "react";
import { useMyState } from "../../context/myState";
import { useCarContext } from "../../context/CarContext";

const useFleetHook = () => {
  const { setLoading } = useMyState();
  const { carCollection, setCarCollection } = useCarContext();
  // Logic to add image and car-database to firebase ******important

  // ***Important  when want to push new data 1st uncomment car data and in useEffect also

  //eslint-disable-next-line
  const uploadDataWithImages = async (carData) => {
    try {
      const collectionRef = collection(firebaseDb, "cars");
      const existingDataSnapshot = await getDocs(collectionRef);
      const existingData = existingDataSnapshot.docs.map((doc) => doc.data());

      const newData = carData.filter(
        (item) =>
          !existingData.find(
            (existingItem) =>
              existingItem.model === item.model &&
              existingItem.name === item.name
          )
      );
      const promises = newData.map(async (item) => {
        try {
          const imageResponse = await fetch(item.image);
          const imageBlob = await imageResponse.blob();
          const imageName = `car-images/${item.model}.png`;
          const imageRef = ref(firebaseStorage, imageName);
          const uploadTask = uploadBytesResumable(imageRef, imageBlob);
          const imageURL = await new Promise((resolve, reject) => {
            uploadTask.on("state_changed", null, reject, async () => {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(url);
            });
          });
          const uniqueId = `${item.brand}-${item.model}`;
          const timestamp = new Date().getTime();
          await addDoc(collectionRef, {
            ...item,
            id: uniqueId,
            timestamp: timestamp,
            image: imageURL,
          });

          console.log("Data uploaded for", item.model);
        } catch (error) {
          console.error("Error uploading data for", item.model, ":", error);
        }
      });
      await Promise.all(promises);
      console.log("Data upload process completed successfully!");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                Get Car data                                */
  /* -------------------------------------------------------------------------- */

  const fetchCarData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const querySnapshot = await getDocs(collection(firebaseDb, "cars"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCarCollection(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchCarData();
    // Call fetchCarData only when the component mounts
    //eslint-disable-next-line
  }, []);

  return { carCollection };
};

export default useFleetHook;
