'use client'

import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const func = async() => {
      axios.post("/api/test", obj, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        console.log("hello")
      })
      // fetch("/api/test",{
      //   method: "POST",
      //   headers:{
      //     "Content-Type":"application/json"
      // },
      // body:JSON.stringify(obj)
      // })
    }
    window.addEventListener('beforeunload', func)
    return () => {
      window.removeEventListener("beforeunload", func)
    }
  },[])
  return (
   <h1>hello</h1>
  );
}

const obj ={
  "company": {
    "name": "株式会社サンプル",
    "industry": "IT",
    "established": "2000-04-01",
    "address": {
      "street": "東京都渋谷区渋谷2丁目",
      "city": "東京",
      "postalCode": "150-0002",
      "country": "日本"
    },
    "employees": [
      {
        "id": 1,
        "name": "鈴木一郎",
        "position": "CEO",
        "email": "ichiro.suzuki@sample.com",
        "phone": "03-1234-5678",
        "hireDate": "2000-04-01",
        "salary": 12000000,
        "department": "経営",
        "address": {
          "street": "東京都渋谷区渋谷3丁目",
          "city": "東京",
          "postalCode": "150-0003",
          "country": "日本"
        }
      },
      {
        "id": 2,
        "name": "佐藤花子",
        "position": "CTO",
        "email": "hanako.sato@sample.com",
        "phone": "03-2345-6789",
        "hireDate": "2005-09-15",
        "salary": 10000000,
        "department": "技術",
        "address": {
          "street": "東京都新宿区新宿1丁目",
          "city": "東京",
          "postalCode": "160-0022",
          "country": "日本"
        }
      },
      {
        "id": 3,
        "name": "田中太郎",
        "position": "エンジニア",
        "email": "taro.tanaka@sample.com",
        "phone": "03-3456-7890",
        "hireDate": "2015-06-20",
        "salary": 6000000,
        "department": "技術",
        "address": {
          "street": "東京都中野区中野5丁目",
          "city": "東京",
          "postalCode": "164-0001",
          "country": "日本"
        }
      },
      {
        "id": 4,
        "name": "山本次郎",
        "position": "マーケティング",
        "email": "jiro.yamamoto@sample.com",
        "phone": "03-4567-8901",
        "hireDate": "2010-03-25",
        "salary": 8000000,
        "department": "マーケティング",
        "address": {
          "street": "東京都渋谷区代々木1丁目",
          "city": "東京",
          "postalCode": "151-0053",
          "country": "日本"
        }
      },
      {
        "id": 5,
        "name": "木村美咲",
        "position": "デザイナー",
        "email": "misaki.kimura@sample.com",
        "phone": "03-5678-9012",
        "hireDate": "2018-11-10",
        "salary": 5000000,
        "department": "デザイン",
        "address": {
          "street": "東京都渋谷区恵比寿西1丁目",
          "city": "東京",
          "postalCode": "150-0021",
          "country": "日本"
        }
      }
    ],
    "projects": [
      {
        "id": 101,
        "name": "プロジェクトA",
        "description": "新しいWebアプリケーションの開発プロジェクト。",
        "startDate": "2023-01-15",
        "endDate": "2023-12-31",
        "budget": 15000000,
        "teamMembers": [
          {
            "employeeId": 2,
            "role": "リーダー"
          },
          {
            "employeeId": 3,
            "role": "エンジニア"
          },
          {
            "employeeId": 5,
            "role": "デザイナー"
          }
        ]
      },
      {
        "id": 102,
        "name": "プロジェクトB",
        "description": "マーケティング戦略の立案と実行。",
        "startDate": "2023-04-01",
        "endDate": "2023-10-01",
        "budget": 5000000,
        "teamMembers": [
          {
            "employeeId": 4,
            "role": "リーダー"
          },
          {
            "employeeId": 1,
            "role": "アドバイザー"
          }
        ]
      },
      {
        "id": 103,
        "name": "プロジェクトC",
        "description": "新製品の市場調査とプロモーション計画。",
        "startDate": "2023-07-01",
        "endDate": "2023-12-01",
        "budget": 8000000,
        "teamMembers": [
          {
            "employeeId": 2,
            "role": "リーダー"
          },
          {
            "employeeId": 3,
            "role": "エンジニア"
          },
          {
            "employeeId": 5,
            "role": "デザイナー"
          }
        ]
      }
    ]
  },
  "products": [
    {
      "id": 201,
      "name": "製品A",
      "category": "ソフトウェア",
      "price": 10000,
      "quantityInStock": 500,
      "description": "Webアプリケーション向けの管理ツール。",
      "releaseDate": "2023-02-01"
    },
    {
      "id": 202,
      "name": "製品B",
      "category": "ハードウェア",
      "price": 20000,
      "quantityInStock": 300,
      "description": "新型スマートフォン。",
      "releaseDate": "2023-05-10"
    },
    {
      "id": 203,
      "name": "製品C",
      "category": "サービス",
      "price": 5000,
      "quantityInStock": 1000,
      "description": "クラウドストレージサービス。",
      "releaseDate": "2023-08-15"
    }
  ],
  "revenue": {
    "2023": 50000000,
    "2024": 65000000
  },
  "expenses": {
    "2023": 35000000,
    "2024": 42000000
  }
}

