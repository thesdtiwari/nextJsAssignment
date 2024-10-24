import { useEffect, useState } from "react";
import { getFollowedCharacters } from "@/queries/followedCharacters";
import CharacterList from "@/components/characters/CharacterList";
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";

const DisplayFollowing = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await getFollowedCharacters();
        setData(response);
      };
  
      fetchData();
    }, []);
  
    if(!data?.length) return <EmptyPlaceholder />
    console.log({data});
    return <CharacterList characters={data}/>;
}

export default DisplayFollowing;