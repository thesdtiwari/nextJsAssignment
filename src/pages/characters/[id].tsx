import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { followCharacter } from "@/mutations/follow";
import { getFollowedCharacters } from "@/mutations/getFollowedCharacters";
import { unfollowCharacter } from "@/mutations/removeFollow";

const IndividualCharacter = () => {
    const [character, setCharacter] = useState(null);
    const [followedCharacters, setFollowedCharacters] = useState([]);

    const router = useRouter();
    const { id } = router.query;
    console.log({id});
    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await getCharacterById({id : id});
            setCharacter(response.character);
        }
        if(id) fetchCharacter();
        const fetchFollowongCharacters = async () => {
          const response = await getFollowedCharacters();
          console.log("🚀 ~ fetchFollowongCharacters ~ response:", response.storedData)
          
          setFollowedCharacters(response.storedData);
        };
    
        if(id) fetchFollowongCharacters();
    },[id]);


    const onFollow = () => {
        followCharacter({id:id});
        setFollowedCharacters([...followedCharacters,id]);
    }

    const onUnFollow = () => {
        unfollowCharacter({id:id});
        setFollowedCharacters(prev => prev.filter(followedId => followedId != id));
        console.log('Deleted');
    }

    if(!character || !followedCharacters) return <>Fetching Character for you</>;
    console.log({followedCharacters});
    const followed = followedCharacters.includes(id);
    console.log({character});
    return <Character character={character} onClick={followed ? onUnFollow : onFollow} followed={followed}/>
}

export default IndividualCharacter;