import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
// component
import { compose } from '@/utils/redux';
import TableCheckbox from '@/@energy/@pcDesign/components/tableCheckbox';
import { tableList } from './constants';
import styles from './index.module.scss';

function tableUnit(props: any) {
    const [tableData, setTableOfData] = useState(tableList);
    const columnList = [
        {
            title: 'checkbox',
            regularWidth: '60px',
            value: 'checkbox',
        },
        {
            title: '会员账号',
            width: '120px',
            value: 'name',
            render: (val: any) => {
                return val?.name + '!';
            },
        },
        { title: 'VIP等级', width: '120px', value: 'grade' },
        { title: '注册时间', width: '200px', value: 'register_at' },
        {
            title: '标签',
            width: '120px',
            value: 'tags',
            render: (val: any) => {
                let textData = val?.tags;
                const len_15 = textData?.slice(0, 15);
                let labelag =
                    textData?.length > 15 ? <div>{`${len_15}...`}</div> : <span>{textData}</span>;
                return labelag;
            },
        },
        {
            title: '操作',
            regularWidth: '120px',
            value: 'operate',
            render: (item: any) => {
                return (
                    <>
                        <button
                            className={styles.editBtn}
                            onClick={() => {
                                editWay(item);
                            }}
                        >
                            编辑
                        </button>
                        <button
                            className={styles.deleteBtn}
                            onClick={() => {
                                deleteWay(item);
                            }}
                        >
                            删除
                        </button>
                    </>
                );
            },
        },
    ];
    const editWay = (item) => {
        console.log('--editWay--', item);
    };
    const deleteWay = (item) => {
        console.log('--deleteWay--', item);
    };
    useEffect(() => {});
    return (
        <section className={styles.tableUnit}>
            <button>批量编辑</button>
            <br />
            <br />
            <TableCheckbox columnList={columnList} tableData={tableData}></TableCheckbox>
        </section>
    );
}

export default compose(observer)(tableUnit);
