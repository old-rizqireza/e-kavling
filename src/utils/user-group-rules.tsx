// tslint:disable:object-literal-sort-keys
import { IRule } from '@interfaces/iuser-group';

export const treeDataRules = [
  {
    checkable: true,
    children: [
      { disableCheckbox: false, title: 'view', key: 'accountGroup_view' },
      { disableCheckbox: false, title: 'add', key: 'accountGroup_add' },
      { disableCheckbox: false, title: 'edit', key: 'accountGroup_edit' },
    ],
    key: 'accountGroup',
    title: 'Account Group',
  },
  {
    checkable: true,
    children: [
      { disableCheckbox: false, title: 'view', key: 'account_view' },
      { disableCheckbox: false, title: 'add', key: 'account_add' },
      { disableCheckbox: false, title: 'edit', key: 'account_edit' },
    ],
    key: 'account',
    title: 'Account',
  },
  {
    checkable: true,
    children: [
      { disableCheckbox: false, title: 'view', key: 'opportunity_view' },
      { disableCheckbox: false, title: 'add', key: 'opportunity_add' },
      { disableCheckbox: false, title: 'edit', key: 'opportunity_edit' },
      { disableCheckbox: false, title: 'delete', key: 'opportunity_delete' },
      { disableCheckbox: false, title: 'approval', key: 'opportunity_approval' },
    ],
    key: 'opportunity',
    title: 'Opportunity',
  },
  {
    checkable: true,
    children: [{ disableCheckbox: false, title: 'view', key: 'salesOrder_view' }],
    key: 'salesOrder',
    title: 'Sales Order',
  },
  {
    checkable: true,
    children: [
      { disableCheckbox: false, title: 'view', key: 'salesManagement_view' },
      { disableCheckbox: false, title: 'add', key: 'salesManagement_add' },
      { disableCheckbox: false, title: 'edit', key: 'salesManagement_edit' },
      { disableCheckbox: false, title: 'assign', key: 'salesManagement_assign' },
      { disableCheckbox: false, title: 'delete', key: 'salesManagement_delete' },
    ],
    key: 'salesManagement',
    title: 'Sales Management',
  },
  {
    checkable: true,
    children: [
      { disableCheckbox: false, title: 'view', key: 'userRole_view' },
      { disableCheckbox: false, title: 'add', key: 'userRole_add' },
      { disableCheckbox: false, title: 'edit', key: 'userRole_edit' },
      { disableCheckbox: false, title: 'assign', key: 'userRole_assign' },
      { disableCheckbox: false, title: 'delete', key: 'userRole_delete' },
    ],
    key: 'userRole',
    title: 'User Role',
  },
  {
    checkable: true,
    children: [{ disableCheckbox: false, title: 'view', key: 'product_view' }],
    key: 'product',
    title: 'Product',
  },
  {
    checkable: true,
    children: [{ disableCheckbox: false, title: 'view', key: 'shipping_view' }],
    key: 'shipping',
    title: 'Shipping',
  },
  {
    checkable: false,
    children: [
      { disableCheckbox: true, title: 'view', key: 'contractLKPP_view' },
      { disableCheckbox: true, title: 'edit', key: 'contractLKPP_edit' },
    ],
    key: 'contractLKPP',
    title: 'LKPP Contract',
  },
  {
    checkable: false,
    children: [
      { disableCheckbox: true, title: 'view', key: 'productLKPP_view' },
      { disableCheckbox: true, title: 'edit', key: 'productLKPP_edit' },
    ],
    key: 'productLKPP',
    title: 'LKPP Product',
  },
  {
    checkable: false,
    children: [{ disableCheckbox: true, title: 'view', key: 'feedLKPP_view' }],
    key: 'feedLKPP',
    title: 'LKPP Feed',
  },
];

export const generatedCheckedKeys = (rules: IRule[]) => {
  if (rules) {
    const listCheckedKeys: any[] = rules.map((rule: IRule, ruleIndex: number) => {
      const moduleName: string = rule.moduleName;
      const accessKeys: string[] = Object.keys(rule.access);
      return accessKeys.map((accessKey: string) => `${moduleName}_${accessKey}`);
    });
    const convertToArray = [].concat(...listCheckedKeys);
    return convertToArray;
  }
  return [];
};

export const rulesParams = (checkedKeys: string[]) => {
  const rules = [
    {
      moduleName: 'accountGroup',
      access: {
        view: checkedKeys.includes('accountGroup_view'),
        add: checkedKeys.includes('accountGroup_add'),
        edit: checkedKeys.includes('accountGroup_edit'),
      },
    },
    {
      moduleName: 'account',
      access: {
        view: checkedKeys.includes('account_view'),
        add: checkedKeys.includes('account_add'),
        edit: checkedKeys.includes('account_edit'),
        delete: checkedKeys.includes('account_delete'),
      },
    },
    {
      moduleName: 'opportunity',
      access: {
        view: checkedKeys.includes('opportunity_view'),
        add: checkedKeys.includes('opportunity_add'),
        edit: checkedKeys.includes('opportunity_edit'),
        delete: checkedKeys.includes('opportunity_delete'),
        approval: checkedKeys.includes('opportunity_approval'),
      },
    },
    {
      moduleName: 'salesOrder',
      access: {
        view: checkedKeys.includes('salesOrder_view'),
      },
    },
    {
      moduleName: 'salesManagement',
      access: {
        view: checkedKeys.includes('salesManagement_view'),
        add: checkedKeys.includes('salesManagement_add'),
        edit: checkedKeys.includes('salesManagement_edit'),
        assign: checkedKeys.includes('salesManagement_assign'),
        delete: checkedKeys.includes('salesManagement_delete'),
      },
    },
    {
      moduleName: 'userRole',
      access: {
        view: checkedKeys.includes('userRole_view'),
        add: checkedKeys.includes('userRole_add'),
        edit: checkedKeys.includes('userRole_edit'),
        assign: checkedKeys.includes('userRole_assign'),
        delete: checkedKeys.includes('userRole_delete'),
      },
    },
    {
      moduleName: 'product',
      access: {
        view: checkedKeys.includes('product_view'),
      },
    },
    {
      moduleName: 'shipping',
      access: {
        view: checkedKeys.includes('shipping_view'),
      },
    },
    {
      moduleName: 'contractLKPP',
      access: {
        view: checkedKeys.includes('contractLKPP_view'),
        edit: checkedKeys.includes('contractLKPP_edit'),
      },
    },
    {
      moduleName: 'productLKPP',
      access: {
        view: checkedKeys.includes('productLKPP_view'),
        edit: checkedKeys.includes('productLKPP_edit'),
      },
    },
    {
      moduleName: 'feedLKPP',
      access: {
        view: checkedKeys.includes('feedLKPP_view'),
      },
    },
  ];
  return rules;
};
