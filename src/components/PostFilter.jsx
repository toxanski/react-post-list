import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                value={filter.searchQuery}
                onChange={event => setFilter({...filter, searchQuery: event.target.value})}
            />

            <MySelect
                value={filter.selectedSort}

                //возвращает выбр. метод сорт.
                onChange={selectedSortName => setFilter({...filter, selectedSort: selectedSortName})}

                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;