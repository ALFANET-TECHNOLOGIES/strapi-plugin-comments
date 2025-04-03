import { FC } from 'react';
import { Comment } from '../../api/schemas';
import { Flex } from '@strapi/design-system';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type Props = {
    readonly item: Comment;
};
export const Rating: FC<{ item: Comment }> = ({ item }) => {

    const stars = [];
    if(item.rating != null) {
        for (let i = 0; i < item.rating && i + 0.5 < item.rating; ++i) {
            stars.push(<FontAwesomeIcon icon={['fas', 'star'] }/>);
        }
        if( item.rating % 1 == 0.5) {
            stars.push(<FontAwesomeIcon icon={['fas', 'star-half']}/>);
        }
    }

    return (
        <Flex justifyContent={'end'}>
            {stars}
        </Flex>
    )
};
