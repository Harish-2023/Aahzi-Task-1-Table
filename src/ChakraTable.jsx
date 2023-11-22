import { useEffect, useState } from "react";
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/table';
import './ChakraTable.css';

export default function ChakraTable() {
    const [playerData, setPlayerData] = useState([]);

    const theme = extendTheme({
        colors:{
            brand:{
                100: "#85e0d6",
                900: "#1a202c",
            }
        }
    })

    useEffect(()=>{
        fetch('https://www.balldontlie.io/api/v1/players?page=1')
        .then((response) => response.json())
        .then((data) => setPlayerData(data.data));
    },[])
    return(
        <div className="tableStyle">
           <ChakraProvider theme={theme}>
           <Box p={2}>
           <TableContainer>
                <Table variant='striped' colorScheme="brand" size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Player Name</Th>
                            <Th>Position</Th>
                            <Th>Height</Th>
                            <Th>Weight</Th>
                            <Th>City</Th>
                            <Th>Team Name</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {playerData?.map((player) => (
                            <Tr key={player.id}>
                                <Td>{player.first_name} {player.last_name}</Td>
                                <Td>{player.position}</Td>
                                <Td>{player.height_feet}</Td>
                                <Td>{player.weight_pounds}</Td>
                                <Td>{player.team.city}</Td>
                                <Td>{player.team.full_name}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
           </Box>
           </ChakraProvider>
            {/* {console.log(playerData)} */}
        </div>
    );
}

// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/table';
// import { ChakraProvider } from '@chakra-ui/table';


// export default function ChakraTable(){
// return(
//     <ChakraProvider>
//         <TableContainer>
//         <Table variant='unstyled' colorScheme='teal'>
//             <TableCaption>Imperial to metric conversion factors</TableCaption>
//             <Thead>
//             <Tr>
//                 <Th>To convert</Th>
//                 <Th>into</Th>
//                 <Th isNumeric>multiply by</Th>
//             </Tr>
//             </Thead>
//             <Tbody>
//             <Tr>
//                 <Td>inches</Td>
//                 <Td>millimetres (mm)</Td>
//                 <Td isNumeric>25.4</Td>
//             </Tr>
//             <Tr>
//                 <Td>feet</Td>
//                 <Td>centimetres (cm)</Td>
//                 <Td isNumeric>30.48</Td>
//             </Tr>
//             <Tr>
//                 <Td>yards</Td>
//                 <Td>metres (m)</Td>
//                 <Td isNumeric>0.91444</Td>
//             </Tr>
//             </Tbody>
//             <Tfoot>
//             <Tr>
//                 <Th>To convert</Th>
//                 <Th>into</Th>
//                 <Th isNumeric>multiply by</Th>
//             </Tr>
//             </Tfoot>
//         </Table>
//         </TableContainer>
//     </ChakraProvider>
// );
// }