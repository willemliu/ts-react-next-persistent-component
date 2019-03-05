import React, { PureComponent } from "react";
import Link from 'next/link';

export default class Header extends PureComponent<any, any> {

    render() {
        return (
            <div>
                <Link href="/">
                    <button>Home</button>
                </Link>
                <Link href="/page1">
                    <button>Page 1</button>
                </Link>
                <Link href="/page2">
                    <button>Page 2</button>
                </Link>
                <style jsx>{`
                    button {
                        margin-right: .5rem;
                        padding: .5rem 1.5rem;
                        background-color: #49a4a2;
                        color: #ffeadb;
                        font-family: ProximaNovaBold, sans-serif;
                        border: none;
                        border-radius: unset;
                        border-right: 1px solid rgba(0,0,0,0.1);
                        box-shadow: 0 -2px 0 0 rgba(0,0,0,0.2) inset;
                        line-hHeight: 1.2;
                        font-size: 1rem;
                        cursor: pointer;
                    }
                `}</style>
            </div>
        );
    }
}
