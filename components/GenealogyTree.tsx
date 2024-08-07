'use client'
import React, { useState, useEffect } from 'react';
import { PrismaClient, User } from '@prisma/client';
import 'react-tree-graph/dist/style.css';
import {Tree} from 'react-tree-graph';

interface TreeNode {
  name: string;
  children: TreeNode[];
}

const GenealogyTree: React.FC = () => {
  const prisma = new PrismaClient();
  const [users, setUsers] = useState<User[]>([]);
  const [treeData, setTreeData] = useState<TreeNode>({ name: '', children: [] });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await prisma.user.findMany({
          include: {
            leftDownline: true,
            rightDownline: true,
          },
        });
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        await prisma.$disconnect();
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const buildTreeData = (users: User[]): TreeNode => {
      const findChildren = (user: User): TreeNode[] => {
        const children: TreeNode[] = [];
        if (user.leftDownline) {
          children.push({
            name: user.leftDownline.name || '',
            children: findChildren(user.leftDownline),
          });
        }
        if (user.rightDownline) {
          children.push({
            name: user.rightDownline.name || '',
            children: findChildren(user.rightDownline),
          });
        }
        return children;
      };

      const rootUser = users.find((user) => !user.parentId);
      if (rootUser) {
        return {
          name: rootUser.name || '',
          children: findChildren(rootUser),
        };
      }
      return { name: 'No root user found', children: [] };
    };

    if (users.length > 0) {
      const newTreeData = buildTreeData(users);
      setTreeData(newTreeData);
    }
  }, [users]);

  return (
    <div>
      {treeData.name ? (
        <Tree
          data={treeData}
          height={400}
          width={600}
        />
      ) : (
        <p>Loading...</p>
      )}
              <Tree
          data={treeData}
          height={400}
          width={600}
        />

    </div>
  );
};

export default GenealogyTree;
