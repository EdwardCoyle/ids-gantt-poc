
type IdsGanttChartDataHeader = { name: string; id: string; };

type IdsGanttChartDataEntry = { employeeId: string; name: string; };

type IdsGanttChartDataGroup = { id: string; expanded: boolean; contents: IdsGanttChartDataEntry[] }

export type IdsGanttChartData = {
    headers: IdsGanttChartDataHeader[];
    groups: IdsGanttChartDataGroup[];
};

export const data: IdsGanttChartData = {
    headers: [
        {
            name: 'Employee ID',
            id: 'employeeId'
        },
        {
            name: 'Name',
            id: 'name'
        }
    ],
    groups: [
        {
            id: 'WC318',
            expanded: false,
            contents: []
        },
        {
            id: 'WC319',
            expanded: true,
            contents: [
                {
                    employeeId: 'DUNBRI0',
                    name: 'Brian Smith'
                },
                {
                    employeeId: 'DUNFAC0',
                    name: 'Freda Jones'
                },
                {
                    employeeId: 'DUNFRE0',
                    name: 'Ian Freeman'
                },
                {
                    employeeId: 'DUNIAN0',
                    name: 'Jim Brown'
                }
            ]
        },
        {
            id: 'WC320',
            expanded: true,
            contents: [
                {
                    employeeId: 'DUNJIM0',
                    name: 'John Jones'
                },
                {
                    employeeId: 'DUNSAR0',
                    name: 'Sara Thomas'
                }
            ]
        }
    ]
};