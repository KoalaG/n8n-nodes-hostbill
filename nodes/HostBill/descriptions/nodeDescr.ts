import { INode } from '../../../generator/compactTypes';

export const nodeDescr: INode = {
	"resources": {
		"client": {
			"defaultOperation": "getAll",
			"operations": {
				"create": {
					"spec": "http://api.hostbillapp.com/clients/addClient/",
					"responseMap": [
						"client_id",
						"info"
					],
					"params": [
						{
							"name": "firstname",
							"display": "First name",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "lastname",
							"display": "Last name",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "email",
							"required": true,
							"type": "string",
							"default": "",
							"display": "Email"
						},
						{
							"name": "password",
							"required": true,
							"type": "string",
							"default": "",
							"display": "Password"
						},
						{
							"name": "password2",
							"display": "Confirm Password",
							"desc": "Password confirmation (same as password)",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "optionalFields",
							"display": "Optional Fields",
							"type": "collection",
							"options": [
								{
									"name": "notifyclient",
									"display": "Notify Client",
									"desc": "Enable if you wish to send customer his login details",
									"type": "boolean",
									"map": "boolYes",
									"required": false,
									"default": false
								},
								{
									"name": "type",
									"desc": "Client type - Private or Company values allowed here",
									"type": "options",
									"options": [
										{
											"value": "Private",
											"name": "Private"
										},
										{
											"value": "Company",
											"name": "Company"
										}
									],
									"required": false,
									"default": "",
									"display": "Type"
								},
								{
									"name": "language",
									"desc": "Customer default language, value has to be one of enabled languages",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Language"
								},
								{
									"name": "companyname",
									"display": "Company Name",
									"desc": "Customer's company name (if any)",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "phonenumber",
									"display": "Phone Number",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address1",
									"display": "Address Line 1",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address2",
									"display": "Address Line 2",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "city",
									"required": false,
									"type": "string",
									"default": "",
									"display": "City"
								},
								{
									"name": "state",
									"required": false,
									"type": "string",
									"default": "",
									"display": "State"
								},
								{
									"name": "postcode",
									"display": "Post Code",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "country",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Country"
								}
							],
							"required": true,
							"default": []
						}
					],
					"name": "create",
					"display": "Create",
					"path": "clients/addClient",
					"method": "GET"
				},
				"delete": {
					"spec": "http://api.hostbillapp.com/clients/deleteClient/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "delete",
					"display": "Delete",
					"path": "clients/deleteClient",
					"method": "GET"
				},
				"get": {
					"spec": "http://api.hostbillapp.com/clients/getClientDetails/",
					"responseMap": "client",
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "get",
					"display": "Get",
					"path": "clients/getClientDetails",
					"method": "GET"
				},
				"getAll": {
					"display": "Get All",
					"spec": "http://api.hostbillapp.com/clients/getClients/",
					"responseMap": "clients",
					"params": [
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						}
					],
					"name": "getAll",
					"path": "clients/getClients",
					"method": "GET"
				},
				"getDomains": {
					"display": "Get Domains",
					"spec": "https://api.hostbillapp.com/clients/getClientDomains/",
					"responseMap": "domains",
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						}
					],
					"name": "getDomains",
					"path": "clients/getClientDomains",
					"method": "GET"
				},
				"update": {
					"spec": "http://api.hostbillapp.com/clients/setClientDetails/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "optionalFields",
							"type": "collection",
							"options": [
								{
									"name": "firstname",
									"display": "First name",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "lastname",
									"display": "Last name",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "companyname",
									"display": "Company Name",
									"desc": "Company name for organization type",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address1",
									"display": "Address Line 1",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address2",
									"display": "Address Line 2",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "city",
									"required": false,
									"type": "string",
									"default": "",
									"display": "City"
								},
								{
									"name": "state",
									"required": false,
									"type": "string",
									"default": "",
									"display": "State"
								},
								{
									"name": "postcode",
									"display": "Post Code",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "country",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Country"
								},
								{
									"name": "phonenumber",
									"display": "Phone Number",
									"required": false,
									"type": "string",
									"default": ""
								}
							],
							"required": true,
							"default": [],
							"display": "OptionalFields"
						}
					],
					"name": "update",
					"display": "Update",
					"path": "clients/setClientDetails",
					"method": "GET"
				},
				"verifyLogin": {
					"display": "Verify Login",
					"spec": "https://api.hostbillapp.com/clients/verifyClientLogin/",
					"responseMap": [
						"client_id"
					],
					"params": [
						{
							"name": "email",
							"required": true,
							"type": "string",
							"default": "",
							"display": "Email"
						},
						{
							"name": "password",
							"required": true,
							"type": "string",
							"default": "",
							"display": "Password"
						}
					],
					"name": "verifyLogin",
					"path": "clients/verifyClientLogin",
					"method": "GET"
				}
			},
			"display": "Client"
		},
		"clientContact": {
			"display": "Client Contact",
			"defaultOperation": "getByClient",
			"operations": {
				"create": {
					"spec": "http://api.hostbillapp.com/clients/addClientContact/",
					"responseMap": [
						"contact_id"
					],
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "firstname",
							"display": "First name",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "lastname",
							"display": "Last name",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "email",
							"required": true,
							"type": "string",
							"default": "",
							"display": "Email"
						},
						{
							"name": "password",
							"required": true,
							"type": "string",
							"default": "",
							"display": "Password"
						},
						{
							"name": "password2",
							"display": "Confirm Password",
							"desc": "Password confirmation (same as password)",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "Optional Fields",
							"type": "collection",
							"options": [
								{
									"name": "phonenumber",
									"display": "Phone Number",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address1",
									"display": "Address Line 1",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address2",
									"display": "Address Line 2",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "city",
									"required": false,
									"type": "string",
									"default": "",
									"display": "City"
								},
								{
									"name": "state",
									"required": false,
									"type": "string",
									"default": "",
									"display": "State"
								},
								{
									"name": "postcode",
									"display": "Post Code",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "country",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Country"
								}
							],
							"required": true,
							"default": [],
							"display": "Optional Fields"
						}
					],
					"name": "create",
					"display": "Create",
					"path": "clients/addClientContact",
					"method": "GET"
				},
				"delete": {
					"spec": "http://api.hostbillapp.com/clients/deleteClientContact/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "client_id",
							"display": "Contact ID to Remove",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "parent_id",
							"display": "Client ID",
							"desc": "Client main profile ID contact is removed from",
							"required": true,
							"type": "string",
							"default": ""
						}
					],
					"name": "delete",
					"display": "Delete",
					"path": "clients/deleteClientContact",
					"method": "GET"
				},
				"getByClient": {
					"display": "Get by Client",
					"spec": "http://api.hostbillapp.com/clients/getClientContacts/",
					"responseMap": "contacts",
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						}
					],
					"name": "getByClient",
					"path": "clients/getClientContacts",
					"method": "GET"
				},
				"update": {
					"spec": "http://api.hostbillapp.com/clients/setContactDetails/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "Optional Fields",
							"type": "collection",
							"options": [
								{
									"name": "firstname",
									"display": "First name",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "lastname",
									"display": "Last name",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "companyname",
									"display": "Company Name",
									"desc": "Company name for organization type",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address1",
									"display": "Address Line 1",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "address2",
									"display": "Address Line 2",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "city",
									"required": false,
									"type": "string",
									"default": "",
									"display": "City"
								},
								{
									"name": "state",
									"required": false,
									"type": "string",
									"default": "",
									"display": "State"
								},
								{
									"name": "postcode",
									"display": "Post Code",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "country",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Country"
								},
								{
									"name": "phonenumber",
									"display": "Phone Number",
									"required": false,
									"type": "string",
									"default": ""
								}
							],
							"required": true,
							"default": [],
							"display": "Optional Fields"
						}
					],
					"name": "update",
					"display": "Update",
					"path": "clients/setContactDetails",
					"method": "GET"
				}
			}
		},
		"invoice": {
			"defaultOperation": "getAll",
			"operations": {
				"create": {
					"spec": "https://api.hostbillapp.com/invoices/addInvoice/",
					"responseMap": [
						"invoice_id"
					],
					"params": [
						{
							"name": "client_id",
							"display": "Client ID",
							"type": "number",
							"desc": "Client id to create invoice for",
							"required": true,
							"default": 0
						}
					],
					"name": "create",
					"display": "Create",
					"path": "invoices/addInvoice",
					"method": "GET"
				},
				"addItem": {
					"display": "Add Item",
					"spec": "https://api.hostbillapp.com/invoices/addInvoiceItem/",
					"responseMap": "newline",
					"params": [
						{
							"name": "id",
							"display": "Invoice ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "line",
							"display": "Description",
							"desc": "Description of new invoice item",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "price",
							"display": "Price",
							"required": true,
							"type": "string",
							"default": ""
						},
						{
							"name": "qty",
							"display": "Item QTY",
							"type": "number",
							"default": 1,
							"required": true
						},
						{
							"name": "tax",
							"display": "Item is Taxed",
							"type": "boolean",
							"map": "boolOneZero",
							"required": true,
							"default": false
						}
					],
					"name": "addItem",
					"path": "invoices/addInvoiceItem",
					"method": "GET"
				},
				"addPayment": {
					"display": "Add Payment",
					"spec": "https://api.hostbillapp.com/invoices/addInvoicePayment/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Invoice ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "amount",
							"display": "Transaction amount",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "paymentmodule",
							"type": "number",
							"display": "Payment Gateway ID",
							"desc": "ID of related payment gateway",
							"required": true,
							"default": 0
						},
						{
							"name": "fee",
							"desc": "Fees applied to payment (0 for no fees)",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Fee"
						},
						{
							"name": "date",
							"display": "Transaction Date",
							"type": "dateTime",
							"required": true,
							"default": ""
						},
						{
							"name": "Optional Fields",
							"type": "collection",
							"options": [
								{
									"name": "transnumber",
									"display": "Transaction Number",
									"type": "number",
									"required": false,
									"default": 0
								},
								{
									"name": "currency_id",
									"display": "Currency ID",
									"type": "number",
									"required": false,
									"default": 0
								},
								{
									"name": "rate",
									"display": "Currency Rate",
									"type": "number",
									"required": false,
									"default": 0
								}
							],
							"required": true,
							"default": [],
							"display": "Optional Fields"
						}
					],
					"name": "addPayment",
					"path": "invoices/addInvoicePayment",
					"method": "GET"
				},
				"setStatus": {
					"display": "Set Status",
					"spec": "https://api.hostbillapp.com/invoices/setInvoiceStatus/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Invoice ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "status",
							"type": "options",
							"options": [
								{
									"value": "Paid",
									"name": "Paid"
								},
								{
									"value": "Unpaid",
									"name": "Unpaid"
								},
								{
									"value": "Cancelled",
									"name": "Cancelled"
								}
							],
							"required": true,
							"default": "",
							"display": "Status"
						}
					],
					"name": "setStatus",
					"path": "invoices/setInvoiceStatus",
					"method": "GET"
				},
				"delete": {
					"spec": "https://api.hostbillapp.com/invoices/deleteInvoice/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Invoice ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "delete",
					"display": "Delete",
					"path": "invoices/deleteInvoice",
					"method": "GET"
				},
				"get": {
					"spec": "https://api.hostbillapp.com/invoices/getInvoiceDetails/",
					"responseMap": [
						"invoice",
						"transactions"
					],
					"params": [
						{
							"name": "id",
							"display": "Invoice ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "get",
					"display": "Get",
					"path": "invoices/getInvoiceDetails",
					"method": "GET"
				},
				"getAll": {
					"display": "Get All",
					"spec": "https://api.hostbillapp.com/invoices/getInvoices/",
					"responseMap": "invoices",
					"params": [
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						},
						{
							"name": "list",
							"display": "Status of invoices to list",
							"type": "options",
							"options": [
								{
									"value": "all",
									"name": "All"
								},
								{
									"value": "paid",
									"name": "Paid"
								},
								{
									"value": "unpaid",
									"name": "Unpaid"
								},
								{
									"value": "cancelled",
									"name": "Cancelled"
								}
							],
							"default": "all",
							"required": true
						}
					],
					"name": "getAll",
					"path": "invoices/getInvoices",
					"method": "GET"
				}
			},
			"display": "Invoice"
		},
		"order": {
			"defaultOperation": "getAll",
			"operations": {
				"create": {
					"spec": "https://api.hostbillapp.com/orders/addOrder/",
					"responseMap": [
						"order_id",
						"info"
					],
					"params": [
						{
							"name": "client_id",
							"display": "Client ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "confirm",
							"display": "Notify Client",
							"type": "boolean",
							"desc": "Enable if you wish to notify client about this order",
							"map": "boolOne",
							"required": true,
							"default": false
						},
						{
							"name": "invoice_generate",
							"display": "Generate Invoice",
							"type": "boolean",
							"desc": "Enable if you wish to generate invoice for this order",
							"map": "boolOne",
							"required": true,
							"default": false
						},
						{
							"name": "invoice_info",
							"display": "Send Invoice",
							"type": "boolean",
							"desc": "Enable if you wish to send invoice generated for this order",
							"map": "boolOne",
							"required": true,
							"default": false
						},
						{
							"name": "module",
							"display": "Payment module ID",
							"type": "number",
							"desc": "Payment module ID invoice should be generated with",
							"required": true,
							"default": 0
						},
						{
							"name": "serviceFields",
							"display": "Ordering product/service",
							"type": "collection",
							"options": [
								{
									"name": "product",
									"display": "Service ID",
									"type": "number",
									"desc": "Service ID to purchase",
									"required": false,
									"default": 0
								},
								{
									"name": "domain_name",
									"display": "Domain Name",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "cycle",
									"display": "Billing cycle",
									"type": "options",
									"options": [
										{
											"name": "Monthly",
											"value": "m"
										},
										{
											"name": "Quarterly",
											"value": "q"
										},
										{
											"name": "Semi Annualy (2 in a year)",
											"value": "s"
										},
										{
											"name": "Annually",
											"value": "a"
										},
										{
											"name": "Bi-Monthly",
											"value": "b"
										},
										{
											"name": "t",
											"value": "t"
										},
										{
											"name": "Daily",
											"value": "d"
										},
										{
											"name": "Weekly",
											"value": "w"
										},
										{
											"name": "Hourly",
											"value": "h"
										},
										{
											"name": "Free",
											"value": "Free"
										},
										{
											"name": "Once",
											"value": "Once"
										}
									],
									"required": false,
									"default": ""
								},
								{
									"name": "coupon",
									"display": "Promocode",
									"desc": "Valid promotion code",
									"required": false,
									"type": "string",
									"default": ""
								}
							],
							"required": true,
							"default": []
						},
						{
							"name": "domainFields",
							"display": "Ordering domain action",
							"type": "collection",
							"desc": "Ordering domain registration/transfer",
							"options": [
								{
									"name": "domain_action",
									"display": "Type of Action",
									"type": "options",
									"options": [
										{
											"value": "register",
											"name": "Register"
										},
										{
											"value": "transfer",
											"name": "Transfer"
										}
									],
									"required": false,
									"default": ""
								},
								{
									"name": "domain_sld",
									"display": "Domain Name",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "domain_period",
									"display": "Number of Years",
									"type": "number",
									"required": false,
									"default": 0
								},
								{
									"name": "domain_tld",
									"display": "Top-level Domain",
									"desc": "Domain tld, e.g.: .com, .org",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "product",
									"display": "Domain product ID",
									"type": "number",
									"desc": "Domain product ID - id of product from Domains order page type. Note: domain_tld is the prefered value and will be used if specified.",
									"required": false,
									"default": 0
								},
								{
									"name": "domain_dns",
									"display": "Enable DNS Management",
									"type": "boolean",
									"desc": "Enable if you wish to enable DNS Management",
									"map": "boolOne",
									"required": false,
									"default": false
								},
								{
									"name": "domain_email",
									"display": "Email Forwarding",
									"type": "boolean",
									"desc": "Enable if you wish to enable Email Forwarding",
									"map": "boolOne",
									"required": false,
									"default": false
								},
								{
									"name": "domain_idp",
									"display": "ID Protection",
									"type": "boolean",
									"desc": "Enable if you wish to enable ID Protection",
									"map": "boolOne",
									"required": false,
									"default": false
								},
								{
									"name": "coupon",
									"display": "Promocode",
									"desc": "Valid promotion code",
									"required": false,
									"type": "string",
									"default": ""
								}
							],
							"required": true,
							"default": []
						}
					],
					"name": "create",
					"display": "Create",
					"path": "orders/addOrder",
					"method": "GET"
				},
				"delete": {
					"spec": "http://api.hostbillapp.com/orders/deleteOrder/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Order ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "delete",
					"display": "Delete",
					"path": "orders/deleteOrder",
					"method": "GET"
				},
				"get": {
					"spec": "http://api.hostbillapp.com/orders/getOrderDetails/",
					"responseMap": "details",
					"params": [
						{
							"name": "id",
							"display": "Order ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "get",
					"display": "Get",
					"path": "orders/getOrderDetails",
					"method": "GET"
				},
				"getAll": {
					"display": "Get All",
					"spec": "http://api.hostbillapp.com/orders/getOrders/",
					"responseMap": "orders",
					"params": [
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						},
						{
							"name": "list",
							"display": "Status or Orders to List",
							"type": "options",
							"options": [
								{
									"value": "all",
									"name": "All"
								},
								{
									"value": "active",
									"name": "Active"
								},
								{
									"value": "pending",
									"name": "Pending"
								},
								{
									"value": "fraud",
									"name": "Fraud"
								},
								{
									"value": "cancelled",
									"name": "Cancelled"
								}
							],
							"required": true,
							"default": ""
						}
					],
					"name": "getAll",
					"path": "orders/getOrders",
					"method": "GET"
				},
				"setStatus": {
					"display": "Set Status",
					"spec": "http://api.hostbillapp.com/orders/setOrderStatus/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Order ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "status",
							"type": "options",
							"options": [
								{
									"value": "Active",
									"name": "Active"
								},
								{
									"value": "Pending",
									"name": "Pending"
								},
								{
									"value": "Cancelled",
									"name": "Cancelled"
								},
								{
									"value": "Fraud",
									"name": "Fraud"
								}
							],
							"required": true,
							"default": "",
							"display": "Status"
						}
					],
					"name": "setStatus",
					"path": "orders/setOrderStatus",
					"method": "GET"
				},
				"setActive": {
					"display": "Set Active",
					"spec": "http://api.hostbillapp.com/orders/setOrderActive/",
					"responseMap": [
						"id",
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Order ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "setActive",
					"path": "orders/setOrderActive",
					"method": "GET"
				}
			},
			"display": "Order"
		},
		"account": {
			"defaultOperation": "getAll",
			"operations": {
				"create": {
					"spec": "http://api.hostbillapp.com/accounts/accountCreate/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Account ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "create",
					"display": "Create",
					"path": "accounts/accountCreate",
					"method": "GET"
				},
				"delete": {
					"spec": "http://api.hostbillapp.com/accounts/accountTerminate/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Account ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "delete",
					"display": "Delete",
					"path": "accounts/accountTerminate",
					"method": "GET"
				},
				"get": {
					"spec": "http://api.hostbillapp.com/accounts/getAccountDetails/",
					"responseMap": "details",
					"params": [
						{
							"name": "id",
							"display": "Account ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "get",
					"display": "Get",
					"path": "accounts/getAccountDetails",
					"method": "GET"
				},
				"getAll": {
					"display": "Get All",
					"spec": "http://api.hostbillapp.com/accounts/getAccounts/",
					"responseMap": "accounts",
					"params": [
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						},
						{
							"name": "list",
							"display": "Status to List",
							"type": "options",
							"options": [
								{
									"name": "All",
									"value": "all"
								},
								{
									"name": "Active",
									"value": "all_active"
								},
								{
									"name": "Pending",
									"value": "all_pending"
								},
								{
									"name": "Suspended",
									"value": "all_suspended"
								},
								{
									"name": "Terminated",
									"value": "all_terminated"
								},
								{
									"name": "Fraud",
									"value": "all_fraud"
								},
								{
									"name": "Cancelled",
									"value": "all_cancelled"
								}
							],
							"required": true,
							"default": ""
						}
					],
					"name": "getAll",
					"path": "accounts/getAccounts",
					"method": "GET"
				},
				"update": {
					"spec": "http://api.hostbillapp.com/accounts/editAccountDetails/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Account ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "optionalFields",
							"display": "Optional Fields",
							"type": "collection",
							"options": [
								{
									"name": "product_id",
									"display": "Product ID",
									"type": "number",
									"required": false,
									"default": 0
								},
								{
									"name": "date_created",
									"display": "Creation Date",
									"type": "dateTime",
									"desc": "Sets account creation date",
									"required": false,
									"default": ""
								},
								{
									"name": "domain",
									"display": "Domain/Hostname",
									"desc": "Sets account domain/hostname",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "server_id",
									"display": "Server ID",
									"type": "number",
									"desc": "Sets server (ID) from which this account will be provisoned",
									"required": false,
									"default": 0
								},
								{
									"name": "payment_module",
									"display": "Payment Module ID",
									"type": "number",
									"desc": "Sets payment module (ID) for this account",
									"required": false,
									"default": 0
								},
								{
									"name": "firstpayment",
									"display": "First Payment",
									"type": "number",
									"desc": "Sets first payment amount",
									"required": false,
									"default": 0
								},
								{
									"name": "total",
									"display": "Recurring Amount",
									"type": "number",
									"desc": "Sets recurring amount",
									"required": false,
									"default": 0
								},
								{
									"name": "next_due",
									"display": "Next Due",
									"type": "dateTime",
									"desc": "Sets next due date",
									"required": false,
									"default": ""
								},
								{
									"name": "status",
									"display": "Status",
									"type": "options",
									"desc": "Sets account status",
									"options": [
										{
											"value": "Active",
											"name": "Active"
										},
										{
											"value": "Suspended",
											"name": "Suspended"
										},
										{
											"value": "Terminated",
											"name": "Terminated"
										}
									],
									"required": false,
									"default": ""
								},
								{
									"name": "username",
									"display": "Username",
									"desc": "Sets username for this account",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "password",
									"desc": "Sets password for this account",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Password"
								},
								{
									"name": "rootpassword",
									"display": "Root Password",
									"desc": "Sets root password",
									"required": false,
									"type": "string",
									"default": ""
								},
								{
									"name": "notes",
									"required": false,
									"type": "string",
									"default": "",
									"display": "Notes"
								}
							],
							"required": true,
							"default": []
						}
					],
					"name": "update",
					"display": "Update",
					"path": "accounts/editAccountDetails",
					"method": "GET"
				},
				"addAddon": {
					"display": "Add Addon",
					"spec": "https://api.hostbillapp.com/accounts/addAddonToAccount/",
					"responseMap": [
						"newaddon",
						"info"
					],
					"params": [
						{
							"name": "account_id",
							"display": "Account ID",
							"type": "number",
							"required": true,
							"default": 0
						},
						{
							"name": "addon_id",
							"display": "Addon ID",
							"type": "number",
							"desc": "ID of addon from hb_addons table to add",
							"required": true,
							"default": 0
						},
						{
							"name": "optionalFields",
							"display": "Optional Fields",
							"type": "collection",
							"options": [
								{
									"name": "invoice",
									"type": "boolean",
									"desc": "Set to true if invoice for adding this addon should be generated",
									"map": "boolTrue",
									"required": false,
									"default": false,
									"display": "Invoice"
								},
								{
									"name": "cycle",
									"display": "Billing cycle",
									"type": "options",
									"options": [
										{
											"name": "Monthly",
											"value": "m"
										},
										{
											"name": "Quarterly",
											"value": "q"
										},
										{
											"name": "Semi Annualy (2 in a year)",
											"value": "s"
										},
										{
											"name": "Annually",
											"value": "a"
										},
										{
											"name": "Bi-Monthly",
											"value": "b"
										},
										{
											"name": "t",
											"value": "t"
										},
										{
											"name": "Daily",
											"value": "d"
										},
										{
											"name": "Weekly",
											"value": "w"
										},
										{
											"name": "Hourly",
											"value": "h"
										},
										{
											"name": "Free",
											"value": "Free"
										},
										{
											"name": "Once",
											"value": "Once"
										}
									],
									"required": false,
									"default": ""
								},
								{
									"name": "payment_module",
									"display": "Payment Gateway ID",
									"type": "number",
									"desc": "If you choose to generate invoice, you can provide ID of payment gateway to use",
									"required": false,
									"default": 0
								}
							],
							"required": true,
							"default": []
						}
					],
					"name": "addAddon",
					"path": "accounts/addAddonToAccount",
					"method": "GET"
				}
			},
			"display": "Account"
		},
		"service": {
			"defaultOperation": "getProducts",
			"operations": {
				"getProductDetails": {
					"display": "Get Product Details",
					"spec": "http://api.hostbillapp.com/services/getProductDetails/",
					"responseMap": "product",
					"params": [
						{
							"name": "id",
							"display": "Product ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "getProductDetails",
					"path": "services/getProductDetails",
					"method": "GET"
				},
				"getProducts": {
					"display": "Get Products",
					"spec": "http://api.hostbillapp.com/services/getProducts/",
					"responseMap": "products",
					"params": [
						{
							"name": "id",
							"display": "Orderpage ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "getProducts",
					"path": "services/getProducts",
					"method": "GET"
				}
			},
			"display": "Service"
		},
		"domain": {
			"defaultOperation": "getAll",
			"operations": {
				"register": {
					"spec": "http://api.hostbillapp.com/domains/domainRegister/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Domain ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "register",
					"display": "Register",
					"path": "domains/domainRegister",
					"method": "GET"
				},
				"transfer": {
					"spec": "http://api.hostbillapp.com/domains/domainTransfer/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Domain ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "transfer",
					"display": "Transfer",
					"path": "domains/domainTransfer",
					"method": "GET"
				},
				"renew": {
					"spec": "http://api.hostbillapp.com/domains/domainRenew/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Domain ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "renew",
					"display": "Renew",
					"path": "domains/domainRenew",
					"method": "GET"
				},
				"delete": {
					"spec": "http://api.hostbillapp.com/domains/domainDelete/",
					"responseMap": [
						"info"
					],
					"params": [
						{
							"name": "id",
							"display": "Domain ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "delete",
					"display": "Delete",
					"path": "domains/domainDelete",
					"method": "GET"
				},
				"epp": {
					"spec": "http://api.hostbillapp.com/domains/domainEPP/",
					"responseMap": [
						"EppCode"
					],
					"params": [
						{
							"name": "id",
							"display": "Domain ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "epp",
					"display": "Epp",
					"path": "domains/domainEPP",
					"method": "GET"
				},
				"get": {
					"spec": "http://api.hostbillapp.com/domains/getDomainDetails/",
					"responseMap": "details",
					"params": [
						{
							"name": "id",
							"display": "Domain ID",
							"type": "number",
							"required": true,
							"default": 0
						}
					],
					"name": "get",
					"display": "Get",
					"path": "domains/getDomainDetails",
					"method": "GET"
				},
				"getAll": {
					"display": "Get All",
					"spec": "http://api.hostbillapp.com/domains/getDomains/",
					"responseMap": "domains",
					"params": [
						{
							"name": "page",
							"desc": "Which page to return",
							"type": "number",
							"required": true,
							"default": 0,
							"display": "Page"
						},
						{
							"name": "list",
							"display": "Status to List",
							"type": "options",
							"options": [
								{
									"value": "all",
									"name": "All"
								},
								{
									"value": "active",
									"name": "Active"
								},
								{
									"value": "expired",
									"name": "Expired"
								},
								{
									"value": "pending",
									"name": "Pending"
								},
								{
									"name": "Pending Transfer",
									"value": "pending_transfer"
								},
								{
									"name": "Pending Registration",
									"value": "pending_registration"
								}
							],
							"required": true,
							"default": ""
						}
					],
					"name": "getAll",
					"path": "domains/getDomains",
					"method": "GET"
				}
			},
			"display": "Domain"
		}
	},
	"def": {
		"fields": {
			"page": {
				"name": "page",
				"desc": "Which page to return",
				"type": "number",
				"required": true,
				"default": 0,
				"display": "Page"
			},
			"cycle": {
				"name": "cycle",
				"display": "Billing cycle",
				"type": "options",
				"options": [
					{
						"name": "Monthly",
						"value": "m"
					},
					{
						"name": "Quarterly",
						"value": "q"
					},
					{
						"name": "Semi Annualy (2 in a year)",
						"value": "s"
					},
					{
						"name": "Annually",
						"value": "a"
					},
					{
						"name": "Bi-Monthly",
						"value": "b"
					},
					{
						"name": "t",
						"value": "t"
					},
					{
						"name": "Daily",
						"value": "d"
					},
					{
						"name": "Weekly",
						"value": "w"
					},
					{
						"name": "Hourly",
						"value": "h"
					},
					{
						"name": "Free",
						"value": "Free"
					},
					{
						"name": "Once",
						"value": "Once"
					}
				]
			}
		}
	},
	"models": {
		"Client": [
			{
				"name": "id",
				"display": "Client ID",
				"type": "number",
				"required": true,
				"default": 0
			},
			{
				"name": "notifyclient",
				"display": "Notify Client",
				"desc": "Enable if you wish to send customer his login details",
				"type": "boolean",
				"map": "boolYes"
			},
			{
				"name": "type",
				"desc": "Client type - Private or Company values allowed here",
				"type": "options",
				"options": [
					"Private",
					"Company"
				]
			},
			{
				"name": "language",
				"desc": "Customer default language, value has to be one of enabled languages"
			},
			{
				"name": "companyname",
				"display": "Company Name",
				"desc": "Customer's company name (if any)"
			}
		],
		"Contact": [
			{
				"name": "id",
				"display": "Client ID",
				"type": "number",
				"required": true,
				"default": 0
			},
			{
				"name": "firstname",
				"display": "First name",
				"required": true,
				"type": "string",
				"default": ""
			},
			{
				"name": "lastname",
				"display": "Last name",
				"required": true,
				"type": "string",
				"default": ""
			},
			{
				"name": "email",
				"required": true,
				"type": "string",
				"default": "",
				"display": "Email"
			},
			{
				"name": "password",
				"required": true,
				"type": "string",
				"default": "",
				"display": "Password"
			},
			{
				"name": "password2",
				"display": "Confirm Password",
				"desc": "Password confirmation (same as password)",
				"required": true,
				"type": "string",
				"default": ""
			},
			{
				"name": "companyname",
				"display": "Company Name",
				"desc": "Company name for organization type"
			},
			{
				"name": "address1",
				"display": "Address Line 1"
			},
			{
				"name": "address2",
				"display": "Address Line 2"
			},
			{
				"name": "city"
			},
			{
				"name": "state"
			},
			{
				"name": "postcode",
				"display": "Post Code"
			},
			{
				"name": "country"
			},
			{
				"name": "phonenumber",
				"display": "Phone Number"
			}
		],
		"Invoice": [
			{
				"name": "id",
				"display": "Invoice ID",
				"type": "number",
				"required": true,
				"default": 0
			}
		],
		"Order": [
			{
				"name": "id",
				"display": "Order ID",
				"type": "number",
				"required": true,
				"default": 0
			},
			{
				"name": "status",
				"type": "options",
				"options": [
					{
						"value": "Active",
						"name": "Active"
					},
					{
						"value": "Pending",
						"name": "Pending"
					},
					{
						"value": "Cancelled",
						"name": "Cancelled"
					},
					{
						"value": "Fraud",
						"name": "Fraud"
					}
				],
				"required": true,
				"default": "",
				"display": "Status"
			}
		],
		"Account": [
			{
				"name": "id",
				"display": "Account ID",
				"type": "number",
				"required": true,
				"default": 0
			},
			{
				"name": "product_id",
				"display": "Product ID",
				"type": "number"
			},
			{
				"name": "date_created",
				"display": "Creation Date",
				"type": "dateTime",
				"desc": "Sets account creation date"
			},
			{
				"name": "domain",
				"display": "Domain/Hostname",
				"desc": "Sets account domain/hostname"
			},
			{
				"name": "server_id",
				"display": "Server ID",
				"type": "number",
				"desc": "Sets server (ID) from which this account will be provisoned"
			},
			{
				"name": "payment_module",
				"display": "Payment Module ID",
				"type": "number",
				"desc": "Sets payment module (ID) for this account"
			},
			{
				"name": "firstpayment",
				"display": "First Payment",
				"type": "number",
				"desc": "Sets first payment amount"
			},
			{
				"name": "total",
				"display": "Recurring Amount",
				"type": "number",
				"desc": "Sets recurring amount"
			},
			{
				"name": "next_due",
				"display": "Next Due",
				"type": "dateTime",
				"desc": "Sets next due date"
			},
			{
				"name": "status",
				"display": "Status",
				"type": "options",
				"desc": "Sets account status",
				"options": [
					"Active",
					"Suspended",
					"Terminated"
				]
			},
			{
				"name": "username",
				"display": "Username",
				"desc": "Sets username for this account"
			},
			{
				"name": "password",
				"desc": "Sets password for this account"
			},
			{
				"name": "rootpassword",
				"display": "Root Password",
				"desc": "Sets root password"
			},
			{
				"name": "notes"
			}
		],
		"Domain": [
			{
				"name": "id",
				"display": "Domain ID",
				"type": "number",
				"required": true,
				"default": 0
			}
		]
	}
}
