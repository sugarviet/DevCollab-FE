/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from "react";
import Link from "next/link";
import { Button } from "../../UI";
import { Avatar, Dropdown, MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { APP_NAME, ROUTER } from "@/constants";
import { useRouter } from "next/navigation";
import { isEmpty } from "lodash";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { clearAccessToken } from "@/store/slices/authSlice";

export default function Navbar() {
  const accessToken = useSelector((state: RootState) => state.auth?.accessToken);
  const dispatch = useDispatch();

    return (
      <nav className="w-full bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">{APP_NAME}</h1>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
          {
            isEmpty(accessToken) ? <RegisterButton /> : <UserDropdown dispatch={dispatch} />
          }
        </div>
      </nav>
    );
  }
  
  const UserDropdown = ({dispatch}: {dispatch:any}) => {
    const handleLogout = () => {
      dispatch(clearAccessToken());
    }

    const items: MenuProps['items'] = [
      {
        key: '1',
        label: (
         <Button onClick={handleLogout}>Đăng Xuất</Button>
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
    const router = useRouter();

    const handleGotoLogin = () => {
      router.push(ROUTER.LOGIN);
    }

    return (
      <Button onClick={handleGotoLogin}>Đăng Nhập</Button>
    )
  }