import { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
    searchText: string;
}

const SearchPage: FC<IProps> = ({ searchText }) => {
    return (
        <div>
            {/*<MoviesSearch searchText={searchText} />*/}
        </div>
    );
};

export { SearchPage };
