import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await getCharacters();
        setData(response.characters.results);
      };
  
      fetchData();
    }, []);
  
    if (!data) return <div>Loading...</div>; 
    return <CharacterList characters={data} />;
  };
  
  export default Home;