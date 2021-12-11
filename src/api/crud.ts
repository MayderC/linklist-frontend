/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const URI = `${process.env.VUE_APP_API_URI}/link`

export const getLinks = async(token: string) =>{
  const response = await fetch(URI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token" : token
    }
  })

  const data = await response.json();
  return data;
};

interface link { 
  name : string;
  link: string;
}


export const inserLink = async (link: link, token: string) =>{

  const response = await fetch(URI, { 
    method : "POST",
    headers: {
      "Content-Type": "application/json",
      "token" : token
    },
    body: JSON.stringify(link)
  })
  const data = await response.json()
  return data;
}

export const deleteLink = async(token : string, id : string)=>{
  const response = await fetch(URI, {
    method: "DELETE",
    headers: {
      'Content-Type': "application/json",
      'token': token, 
    },
    body: JSON.stringify({linkID : id})
  })


  const data = await response.json()

  return data;

}