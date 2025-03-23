 
'use client'

import React from "react";
import Link from "next/link";
import { Button } from "../../UI";
import { Avatar, Dropdown, MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { APP_NAME, ROUTER } from "@/constants";
import { isEmpty } from "lodash";
import useToken from "@/components/Auth/hooks/useToken";
import useNavigation from "@/hooks/useNavigation";

export default function Navbar() {
  const { accessToken } = useToken();

    return (
      <nav className="w-full bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-xl font-bold" href={ROUTER.HOME}>{APP_NAME}</Link>
          <ul className="flex gap-4">
            <li><Link href={ROUTER.POSTS}>Bài Viết</Link></li>
          </ul>
          {
            isEmpty(accessToken) ? <RegisterButton /> : <UserDropdown />
          }
        </div>
      </nav>
    );
  }
  
  const UserDropdown = () => {
    const { handleClearAccessToken } = useToken();


    const items: MenuProps['items'] = [
      {
        key: '1',
        label: (
         <Button onClick={handleClearAccessToken}>Đăng Xuất</Button>
    ),
  },
    ];

    return (
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Avatar size={24} icon={<UserOutlined />} />
      </Dropdown>
    )
  }

  const RegisterButton = () => {
    const { handleGotoLogin } = useNavigation();

    return (
      <Button onClick={handleGotoLogin}>Đăng Nhập</Button>
    )
  }