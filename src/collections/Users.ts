import { CollectionConfig } from "payload/types";


export const Users:CollectionConfig = {
    slug: 'users',
    auth: true,
    // mengirim email verivication
    // auth : {
    //     verify:{
    //         generateEmailHTML:({token}) => {
    //             return `<p>heloo pls veriry</p>`
    //         }
    //     }
    // }
    access:{
        read: () => true,
        create : () => true
    },
    fields:[
        {
            name:'role',
            required:true,
            defaultValue:'user',
            // admin:{
            //     condition: () => false,
            // },
            type:'select',
            options:[
                {label:'Admin', value:'admin'},
                {label : 'User', value: 'user'}
            ]
        }
    ]
}