import Image from "next/image";
import TopBar from "../../(components)/Topbar";
import InputApp from "../../(components)/appInput";
import FormProperties from "../../(hoc)/form";

export default function AddProperty(params) {
    let arr = [
        {
            h1: 'Property details',
            p: 'All fields are required',
            arr: [
                {
                    label: 'Address (Line 1)',
                    placeholder: 'Enter address',
                    type: 'text',
                    name: 'address1'
                },
                {
                    label: 'Address (Line 2)',
                    placeholder: 'Enter address',
                    type: 'text',
                    name: 'address2'
                },
                [
                    {
                        label: 'City',
                        placeholder: 'Enter city',
                        type: 'text',
                        name: 'cty'
                    },{
                        label: 'State',
                        placeholder: 'Select state',
                        type: 'select',
                        name: 'state',
                        opt: [
                            'opt1', 'opt2', 'opt3'
                        ]
                    },{
                        label: 'Zip code',
                        placeholder: 'Enter address',
                        type: 'text',
                        name: 'zipcode'
                    },{
                        label: 'Ownership type',
                        placeholder: 'Select ownership type',
                        type: 'select',
                        name: 'ownershiptype',
                        opt: [
                            'opt1',
                            'opt2',
                            'opt3'
                        ]
                    },{
                        label: 'Number of owners',
                        placeholder: 'Select',
                        type: 'select',
                        name: 'howmanyowner',
                        opt: [
                            'opt1',
                            'opt2',
                            'opt3'
                        ]
                    }
                ]
            ]
        },
        {
            h1: 'Owner',
            p: 'All fields are required',
            arr: [
                [
                    {
                        label: 'First name',
                        placeholder: 'Enter fisrt name',
                        type: 'text',
                        name: 'ownerfirstname'
                    },{
                        label: 'Last name',
                        placeholder: 'Enter last name',
                        type: 'text',
                        name: 'ownerlastname'
                    },{
                        label: 'Email address',
                        placeholder: 'Enter email address',
                        type: 'email',
                        name: 'ownermail'
                    },{
                        label: 'Phone number',
                        placeholder: 'Enter phone number',
                        type: 'number',
                        name: 'ownernumber'
                    },
                ]
            ]
        },{
            h1: 'Additional owners',
            p: 'All fields are required',
            arr: [
                [
                    
                {
                    label: 'First name',
                    placeholder: 'Enter fisrt name',
                    type: 'text',
                    name: 'addownerfirstname'
                },{
                    label: 'Last name',
                    placeholder: 'Enter last name',
                    type: 'text',
                    name: 'addownerlastname'
                },{
                    label: 'Email address',
                    placeholder: 'Enter email address',
                    type: 'email',
                    name: 'addownermail'
                },{
                    label: 'Phone number',
                    placeholder: 'Enter phone number',
                    type: 'number',
                    name: 'addownernumber'
                }
                ]
            ]
        },{
            h1: 'Commission',
            p: 'All fields are required',
            arr: [
                [
                    
                {
                    label: 'Closing price(in US dollars)',
                    placeholder: 'Enter closing price',
                    type: 'number',
                    name: 'closingprice'
                },{
                    label: 'Commission percentage',
                    placeholder: 'Enter percentage',
                    type: 'number',
                    name: 'percentage'
                },{
                    label: 'Closing data',
                    placeholder: 'Select closing date',
                    type: 'date',
                    name: 'date'
                }
                ]
            ]
        }
    ]
    return (
        <>
        <TopBar title={`Properties`}/>
        <FormProperties arrOpt={arr}/>
        </>
    )
}