import { Link } from "react-router-dom"

export const Game = ({selected} : boolean | any) => {
    return (
        <Link to={"Play"}>
            <div className={`h-9 w-9 hover:bg-secondary rounded-xl flex justify-center items-center hover:cursor-pointer ${selected && 'bg-secondary'}`}>
                <svg   width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.79142 0C8.29642 0 8.69321 0.401326 8.69321 0.885278C8.69321 1.23939 8.9938 1.52268 9.35452 1.52268H10.5449C12.3605 1.53448 13.8394 2.98634 13.8514 4.7569V4.98117C14.9937 4.98117 16.1359 5.00477 17.2902 5.01658C21.4625 5.01658 24.5045 7.99111 24.5045 12.0988V17.3751C24.5045 21.4828 21.4625 24.4573 17.2902 24.4573C15.6189 24.4927 13.9476 24.5045 12.2643 24.5045C10.5809 24.5045 8.88559 24.4927 7.21428 24.4573C3.04202 24.4573 0 21.4828 0 17.3751V12.0988C0 7.99111 3.04202 5.01658 7.2263 5.01658C8.80142 4.99297 10.4126 4.96936 12.0478 4.96936V4.7687C12.0478 3.95424 11.3625 3.29324 10.5449 3.29324H9.35452C7.99583 3.29324 6.88964 2.20729 6.88964 0.885278C6.88964 0.401326 7.29845 0 7.79142 0ZM8.68118 11.7211C8.17618 11.7211 7.7794 12.1224 7.7794 12.6064V13.8458H6.50488C6.0119 13.8458 5.60309 14.2471 5.60309 14.731C5.60309 15.2268 6.0119 15.6163 6.50488 15.6163H7.7794V16.8675C7.7794 17.3515 8.17618 17.7528 8.68118 17.7528C9.17416 17.7528 9.58297 17.3515 9.58297 16.8675V15.6163H10.8455C11.3384 15.6163 11.7473 15.2268 11.7473 14.731C11.7473 14.2471 11.3384 13.8458 10.8455 13.8458H9.58297V12.6064C9.58297 12.1224 9.17416 11.7211 8.68118 11.7211ZM18.1319 15.9114H18.0117C17.5054 15.9114 17.1099 16.3127 17.1099 16.7967C17.1099 17.2924 17.5054 17.682 18.0117 17.682H18.1319C18.6249 17.682 19.0337 17.2924 19.0337 16.7967C19.0337 16.3127 18.6249 15.9114 18.1319 15.9114ZM16.0758 11.8509H15.9556C15.4506 11.8509 15.0538 12.2523 15.0538 12.7362C15.0538 13.232 15.4506 13.6215 15.9556 13.6215H16.0758C16.5688 13.6215 16.9776 13.232 16.9776 12.7362C16.9776 12.2523 16.5688 11.8509 16.0758 11.8509Z" fill="#BDBDBD"/>
                </svg>
            </div>
        </Link>

    )
}