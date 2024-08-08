// import { PrismaClient, User } from '@prisma/client';
// import type { NextApiRequest, NextApiResponse } from 'next';

// const prisma = new PrismaClient();

// interface TreeNode {
//     name: string;
//     children: TreeNode[];
// }


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { email } = req.query;

//     if (!email || typeof email !== 'string') {
//         return res.status(400).json({ error: 'Invalid email' });
//     }

//     try {
//         const user = await prisma.user.findUnique({
//             where: { email },
//             include: {
//                 leftDownline: true,
//                 rightDownline: true,
//             },
//         });

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         const findChildren = (user: User): TreeNode[] => {
//             const children: TreeNode[] = [];
//             if (user.leftDownline) {
//                 children.push({
//                     name: user.leftDownline.name || '',
//                     children: findChildren(user.leftDownline),
//                 });
//             }
//             if (user.rightDownline) {
//                 children.push({
//                     name: user.rightDownline.name || '',
//                     children: findChildren(user.rightDownline),
//                 });
//             }
//             return children;
//         };

//         const treeData = {
//             name: user.name || '',
//             children: findChildren(user),
//         };

//         res.status(200).json(treeData);
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         res.status(500).json({ error: 'Error fetching user data' });
//     } finally {
//         await prisma.$disconnect();
//     }
// }




// The tree data with the depth meter  // The tree data with the depth meter  // The tree data with the depth meter






import { PrismaClient, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface TreeNode {
  name: string;
  children: TreeNode[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        leftDownline: true,
        rightDownline: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const buildTree = (user: User, depth = 0): TreeNode => ({
      name: user.name || '',
      children: depth > 0 ? [
        user.leftDownline ? buildTree(user.leftDownline, depth - 1) : null,
        user.rightDownline ? buildTree(user.rightDownline, depth - 1) : null,
      ].filter(Boolean) : [],
    });

    const treeData = buildTree(user);

    res.status(200).json(treeData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  } finally {
    await prisma.$disconnect();
  }
}
