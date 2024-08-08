// 'use client'
// import React, { useState, useEffect } from 'react';
// import { PrismaClient, User } from '@prisma/client';
// import {Tree} from 'react-tree-graph';

// interface TreeNode {
//   name: string;
//   children: TreeNode[];
// }

// const GenealogyTree: React.FC = () => {
//   const prisma = new PrismaClient();
//   const [users, setUsers] = useState<User[]>([]);
//   const [treeData, setTreeData] = useState<TreeNode>({ name: '', children: [] });

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const users = await prisma.user.findMany({
//           include: {
//             leftDownline: true,
//             rightDownline: true,
//           },
//         });
//         setUsers(users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         await prisma.$disconnect();
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const buildTreeData = (users: User[]): TreeNode => {
//       const findChildren = (user: User): TreeNode[] => {
//         const children: TreeNode[] = [];
//         if (user.leftDownline) {
//           children.push({
//             name: user.leftDownline.name || '',
//             children: findChildren(user.leftDownline),
//           });
//         }
//         if (user.rightDownline) {
//           children.push({
//             name: user.rightDownline.name || '',
//             children: findChildren(user.rightDownline),
//           });
//         }
//         return children;
//       };

//       const rootUser = users.find((user) => !user.parentId);
//       if (rootUser) {
//         return {
//           name: rootUser.name || '',
//           children: findChildren(rootUser),
//         };
//       }
//       return { name: 'No root user found', children: [] };
//     };

//     if (users.length > 0) {
//       const newTreeData = buildTreeData(users);
//       setTreeData(newTreeData);
//     }
//   }, [users]);

//   return (
//     <div>
//       {treeData.name ? (
//         <Tree
//           data={treeData}
//           height={400}
//           width={600}
//         />
//       ) : (
//         <p>Loading...</p>
//       )}
//               <Tree
//           data={treeData}
//           height={400}
//           width={600}
//         />

//     </div>
//   );
// };

// export default GenealogyTree;



// the new geneoloy tree using api fetch , // the new geneoloy tree using api fetch , // the new geneoloy tree using api fetch


'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AnimatedTree, Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import { IconUser } from '@tabler/icons-react';

interface TreeNode {
  name: string;
  children: TreeNode[];
}

interface User {
  email: string;
  name: string;
  leftDownline?: User;
  rightDownline?: User;
}

const demoData = {
  name: 'parent-01',
  children: [
    {
      name: 'child left',
      children: []
    },
    {
      name: 'child right',
      children: []
    }
  ]
}

const GenealogyTree: React.FC<{ user: User | null }> = ({ user }) => {
  const [treeData, setTreeData] = useState<TreeNode>({ name: '', children: [] });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/geneologyTree/${user?.email}`);
        setTreeData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email]);

  return (
    <div>
      <AnimatedTree
        data={treeData}
        height={900}
        width={900}
        direction='ltr'
        nodeShape='circle'
        steps={18}
      />

    </div>
  );
};

export default GenealogyTree;


