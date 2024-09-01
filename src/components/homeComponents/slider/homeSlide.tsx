import { Children, ReactNode } from "react";

type homeSlideType = {

    className: string;
    image: string;
    titleLeft: string;
    titleRight: string;
    textRight: string;
    children: ReactNode

}

/**
 * 
 * Function servant à générer un slide,
 * doit etre rempli avec en child UN SEUL HomeSlideContent reprenant
 * les informations présent sous la carte.
 * 
 * @param { string } className string;
 * @param { string } image string;
 * @param { string } titleLeft string;
 * @param { string } titleRight string;
 * @param { string } textRight string;
 * @param { ReactNode } children ReactNode;
 * @returns 
 */
export default function HomeSlide({className, image, titleLeft, titleRight, textRight, children}:homeSlideType): JSX.Element {
    return (
        <div className={`slide ${ className || ""}`}>
        <img src={ image } alt="image" /> 
        <div className="left-info">
            <div className="penetrate-blur">
                <h2>{ titleLeft }</h2>
            </div>
            {
                Children.map( children ,  (child) => {
                    return <>{ child }</>;
                })
            }
        </div>
        <div className="right-info">
            <h2>{ titleRight }</h2>
            <h3>{ textRight }</h3>
        </div>
    </div>
    );
}