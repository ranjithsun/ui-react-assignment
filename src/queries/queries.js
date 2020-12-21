import { gql } from '@apollo/client';

const getLaunchPadsQuery = gql`
    query allLaunchPads{
        allLaunchPads{
            id,
            launchpad
        }
    }
`;

const getFailedlauchesQuery = gql`
    query launchPadFailures($id: String!){
        launchPadFailures(id:$id){
            launchpad
            all_failures{
                name,
                failures
            }
        }
    }
`;

export { getLaunchPadsQuery, getFailedlauchesQuery};