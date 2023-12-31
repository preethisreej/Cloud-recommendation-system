export const GCP_CONFIG = {
	protocol: "rest",
	discoveryVersion: "v1",
	rootUrl: "https://cloudbilling.googleapis.com/",
	id: "cloudbilling:v1",
	basePath: "",
	schemas: {
		PricingExpression: {
			description:
				"Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.",
			id: "PricingExpression",
			type: "object",
			properties: {
				baseUnitDescription: {
					type: "string",
					description:
						'The base unit in human readable form. Example: "byte".',
				},
				usageUnit: {
					type: "string",
					description:
						'The short hand for unit of usage this pricing is specified in. Example: usage_unit of "GiBy" means that usage is specified in "Gibi Byte".',
				},
				baseUnitConversionFactor: {
					type: "number",
					format: "double",
					description:
						"Conversion factor for converting from price per usage_unit to price per base_unit, and start_usage_amount to start_usage_amount in base_unit. unit_price / base_unit_conversion_factor = price per base_unit. start_usage_amount * base_unit_conversion_factor = start_usage_amount in base_unit.",
				},
				tieredRates: {
					description:
						"The list of tiered rates for this pricing. The total cost is computed by applying each of the tiered rates on usage. This repeated list is sorted by ascending order of start_usage_amount.",
					items: {
						$ref: "TierRate",
					},
					type: "array",
				},
				usageUnitDescription: {
					description:
						'The unit of usage in human readable form. Example: "gibi byte".',
					type: "string",
				},
				baseUnit: {
					type: "string",
					description:
						'The base unit for the SKU which is the unit used in usage exports. Example: "By"',
				},
				displayQuantity: {
					type: "number",
					description:
						'The recommended quantity of units for displaying pricing info. When displaying pricing info it is recommended to display: (unit_price * display_quantity) per display_quantity usage_unit. This field does not affect the pricing formula and is for display purposes only. Example: If the unit_price is "0.0001 USD", the usage_unit is "GB" and the display_quantity is "1000" then the recommended way of displaying the pricing info is "0.10 USD per 1000 GB"',
					format: "double",
				},
			},
		},
		Policy: {
			description:
				'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time \u003c timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time \u003c timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
			properties: {
				version: {
					format: "int32",
					description:
						"Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).",
					type: "integer",
				},
				etag: {
					type: "string",
					format: "byte",
					description:
						"`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.",
				},
				auditConfigs: {
					type: "array",
					description:
						"Specifies cloud audit logging configuration for this policy.",
					items: {
						$ref: "AuditConfig",
					},
				},
				bindings: {
					description:
						"Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.",
					type: "array",
					items: {
						$ref: "Binding",
					},
				},
			},
			type: "object",
			id: "Policy",
		},
		TierRate: {
			type: "object",
			description:
				"The price rate indicating starting usage and its corresponding price.",
			properties: {
				unitPrice: {
					description:
						"The price per unit of usage. Example: unit_price of amount $10 indicates that each unit will cost $10.",
					$ref: "Money",
				},
				startUsageAmount: {
					description:
						"Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units.",
					type: "number",
					format: "double",
				},
			},
			id: "TierRate",
		},
		PricingInfo: {
			properties: {
				summary: {
					type: "string",
					description:
						"An optional human readable summary of the pricing information, has a maximum length of 256 characters.",
				},
				effectiveTime: {
					description:
						"The timestamp from which this pricing was effective within the requested time range. This is guaranteed to be greater than or equal to the start_time field in the request and less than the end_time field in the request. If a time range was not specified in the request this field will be equivalent to a time within the last 12 hours, indicating the latest pricing info.",
					type: "string",
					format: "google-datetime",
				},
				aggregationInfo: {
					$ref: "AggregationInfo",
					description:
						"Aggregation Info. This can be left unspecified if the pricing expression doesn't require aggregation.",
				},
				currencyConversionRate: {
					description:
						"Conversion rate used for currency conversion, from USD to the currency specified in the request. This includes any surcharge collected for billing in non USD currency. If a currency is not specified in the request this defaults to 1.0. Example: USD * currency_conversion_rate = JPY",
					type: "number",
					format: "double",
				},
				pricingExpression: {
					$ref: "PricingExpression",
					description:
						"Expresses the pricing formula. See `PricingExpression` for an example.",
				},
			},
			id: "PricingInfo",
			type: "object",
			description:
				"Represents the pricing information for a SKU at a single point of time.",
		},
		Category: {
			description: "Represents the category hierarchy of a SKU.",
			type: "object",
			properties: {
				serviceDisplayName: {
					description:
						"The display name of the service this SKU belongs to.",
					type: "string",
				},
				resourceFamily: {
					description:
						'The type of product the SKU refers to. Example: "Compute", "Storage", "Network", "ApplicationServices" etc.',
					type: "string",
				},
				usageType: {
					type: "string",
					description:
						'Represents how the SKU is consumed. Example: "OnDemand", "Preemptible", "Commit1Mo", "Commit1Yr" etc.',
				},
				resourceGroup: {
					type: "string",
					description:
						'A group classification for related SKUs. Example: "RAM", "GPU", "Prediction", "Ops", "GoogleEgress" etc.',
				},
			},
			id: "Category",
		},
		ListSkusResponse: {
			properties: {
				skus: {
					type: "array",
					description:
						"The list of public SKUs of the given service.",
					items: {
						$ref: "Sku",
					},
				},
				nextPageToken: {
					type: "string",
					description:
						"A token to retrieve the next page of results. To retrieve the next page, call `ListSkus` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.",
				},
			},
			type: "object",
			id: "ListSkusResponse",
			description: "Response message for `ListSkus`.",
		},
		Sku: {
			properties: {
				serviceProviderName: {
					type: "string",
					description:
						"Identifies the service provider. This is 'Google' for first party services in Google Cloud Platform.",
				},
				category: {
					$ref: "Category",
					description:
						"The category hierarchy of this SKU, purely for organizational purpose.",
				},
				description: {
					type: "string",
					description:
						"A human readable description of the SKU, has a maximum length of 256 characters.",
				},
				skuId: {
					type: "string",
					description:
						'The identifier for the SKU. Example: "AA95-CD31-42FE"',
				},
				geoTaxonomy: {
					$ref: "GeoTaxonomy",
					description: "The geographic taxonomy for this sku.",
				},
				serviceRegions: {
					description:
						'List of service regions this SKU is offered at. Example: "asia-east1" Service regions can be found at https://cloud.google.com/about/locations/',
					items: {
						type: "string",
					},
					type: "array",
				},
				name: {
					type: "string",
					description:
						'The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE"',
				},
				pricingInfo: {
					type: "array",
					description:
						"A timeline of pricing info for this SKU in chronological order.",
					items: {
						$ref: "PricingInfo",
					},
				},
			},
			type: "object",
			description: "Encapsulates a single SKU in Google Cloud Platform",
			id: "Sku",
		},
		Binding: {
			properties: {
				members: {
					items: {
						type: "string",
					},
					description:
						"Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. ",
					type: "array",
				},
				role: {
					description:
						"Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.",
					type: "string",
				},
				condition: {
					$ref: "Expr",
					description:
						"The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).",
				},
			},
			id: "Binding",
			type: "object",
			description: "Associates `members`, or principals, with a `role`.",
		},
		BillingAccount: {
			description:
				"A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.",
			properties: {
				name: {
					description:
						"Output only. The resource name of the billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF` would be the resource name for billing account `012345-567890-ABCDEF`.",
					readOnly: true,
					type: "string",
				},
				displayName: {
					type: "string",
					description:
						"The display name given to the billing account, such as `My Billing Account`. This name is displayed in the Google Cloud Console.",
				},
				masterBillingAccount: {
					description:
						"If this account is a [subaccount](https://cloud.google.com/billing/docs/concepts), then this will be the resource name of the parent billing account that it is being resold through. Otherwise this will be empty.",
					type: "string",
				},
				open: {
					type: "boolean",
					readOnly: true,
					description:
						"Output only. True if the billing account is open, and will therefore be charged for any usage on associated projects. False if the billing account is closed, and therefore projects associated with it will be unable to use paid services.",
				},
			},
			type: "object",
			id: "BillingAccount",
		},
		ListProjectBillingInfoResponse: {
			id: "ListProjectBillingInfoResponse",
			description:
				"Request message for `ListProjectBillingInfoResponse`.",
			type: "object",
			properties: {
				nextPageToken: {
					description:
						"A token to retrieve the next page of results. To retrieve the next page, call `ListProjectBillingInfo` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.",
					type: "string",
				},
				projectBillingInfo: {
					type: "array",
					items: {
						$ref: "ProjectBillingInfo",
					},
					description:
						"A list of `ProjectBillingInfo` resources representing the projects associated with the billing account.",
				},
			},
		},
		ProjectBillingInfo: {
			properties: {
				projectId: {
					type: "string",
					description:
						"The ID of the project that this `ProjectBillingInfo` represents, such as `tokyo-rain-123`. This is a convenience field so that you don't need to parse the `name` field to obtain a project ID. This field is read-only.",
				},
				name: {
					type: "string",
					description:
						"The resource name for the `ProjectBillingInfo`; has the form `projects/{project_id}/billingInfo`. For example, the resource name for the billing information for project `tokyo-rain-123` would be `projects/tokyo-rain-123/billingInfo`. This field is read-only.",
				},
				billingAccountName: {
					description:
						"The resource name of the billing account associated with the project, if any. For example, `billingAccounts/012345-567890-ABCDEF`.",
					type: "string",
				},
				billingEnabled: {
					description:
						"True if the project is associated with an open billing account, to which usage on the project is charged. False if the project is associated with a closed billing account, or no billing account at all, and therefore cannot use paid services. This field is read-only.",
					type: "boolean",
				},
			},
			id: "ProjectBillingInfo",
			type: "object",
			description:
				"Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects).",
		},
		ListServicesResponse: {
			id: "ListServicesResponse",
			properties: {
				nextPageToken: {
					description:
						"A token to retrieve the next page of results. To retrieve the next page, call `ListServices` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.",
					type: "string",
				},
				services: {
					type: "array",
					description: "A list of services.",
					items: {
						$ref: "Service",
					},
				},
			},
			type: "object",
			description: "Response message for `ListServices`.",
		},
		Expr: {
			id: "Expr",
			properties: {
				expression: {
					description:
						"Textual representation of an expression in Common Expression Language syntax.",
					type: "string",
				},
				location: {
					description:
						"Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.",
					type: "string",
				},
				description: {
					type: "string",
					description:
						"Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.",
				},
				title: {
					description:
						"Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.",
					type: "string",
				},
			},
			type: "object",
			description:
				'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() \u003c 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
		},
		AggregationInfo: {
			id: "AggregationInfo",
			description:
				"Represents the aggregation level and interval for pricing of a single SKU.",
			properties: {
				aggregationLevel: {
					enum: [
						"AGGREGATION_LEVEL_UNSPECIFIED",
						"ACCOUNT",
						"PROJECT",
					],
					type: "string",
					enumDescriptions: ["", "", ""],
				},
				aggregationInterval: {
					enumDescriptions: ["", "", ""],
					type: "string",
					enum: [
						"AGGREGATION_INTERVAL_UNSPECIFIED",
						"DAILY",
						"MONTHLY",
					],
				},
				aggregationCount: {
					type: "integer",
					description:
						'The number of intervals to aggregate over. Example: If aggregation_level is "DAILY" and aggregation_count is 14, aggregation will be over 14 days.',
					format: "int32",
				},
			},
			type: "object",
		},
		TestIamPermissionsResponse: {
			id: "TestIamPermissionsResponse",
			type: "object",
			description: "Response message for `TestIamPermissions` method.",
			properties: {
				permissions: {
					type: "array",
					description:
						"A subset of `TestPermissionsRequest.permissions` that the caller is allowed.",
					items: {
						type: "string",
					},
				},
			},
		},
		AuditConfig: {
			type: "object",
			description:
				'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
			properties: {
				service: {
					type: "string",
					description:
						"Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.",
				},
				auditLogConfigs: {
					items: {
						$ref: "AuditLogConfig",
					},
					description:
						"The configuration for logging of each type of permission.",
					type: "array",
				},
			},
			id: "AuditConfig",
		},
		ListBillingAccountsResponse: {
			properties: {
				nextPageToken: {
					type: "string",
					description:
						"A token to retrieve the next page of results. To retrieve the next page, call `ListBillingAccounts` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.",
				},
				billingAccounts: {
					items: {
						$ref: "BillingAccount",
					},
					description: "A list of billing accounts.",
					type: "array",
				},
			},
			description: "Response message for `ListBillingAccounts`.",
			id: "ListBillingAccountsResponse",
			type: "object",
		},
		Money: {
			description:
				"Represents an amount of money with its currency type.",
			type: "object",
			id: "Money",
			properties: {
				nanos: {
					description:
						"Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.",
					type: "integer",
					format: "int32",
				},
				currencyCode: {
					type: "string",
					description:
						"The three-letter currency code defined in ISO 4217.",
				},
				units: {
					type: "string",
					format: "int64",
					description:
						'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
				},
			},
		},
		GeoTaxonomy: {
			id: "GeoTaxonomy",
			properties: {
				regions: {
					description:
						"The list of regions associated with a sku. Empty for Global skus, which are associated with all Google Cloud regions.",
					items: {
						type: "string",
					},
					type: "array",
				},
				type: {
					enumDescriptions: [
						"The type is not specified.",
						"The sku is global in nature, e.g. a license sku. Global skus are available in all regions, and so have an empty region list.",
						'The sku is available in a specific region, e.g. "us-west2".',
						'The sku is associated with multiple regions, e.g. "us-west2" and "us-east1".',
					],
					type: "string",
					description:
						"The type of Geo Taxonomy: GLOBAL, REGIONAL, or MULTI_REGIONAL.",
					enum: [
						"TYPE_UNSPECIFIED",
						"GLOBAL",
						"REGIONAL",
						"MULTI_REGIONAL",
					],
				},
			},
			description: "Encapsulates the geographic taxonomy data for a sku.",
			type: "object",
		},
		Service: {
			id: "Service",
			properties: {
				displayName: {
					description:
						"A human readable display name for this service.",
					type: "string",
				},
				businessEntityName: {
					description:
						'The business under which the service is offered. Ex. "businessEntities/GCP", "businessEntities/Maps"',
					type: "string",
				},
				serviceId: {
					type: "string",
					description:
						'The identifier for the service. Example: "DA34-426B-A397"',
				},
				name: {
					type: "string",
					description:
						'The resource name for the service. Example: "services/DA34-426B-A397"',
				},
			},
			description:
				"Encapsulates a single service in Google Cloud Platform.",
			type: "object",
		},
		TestIamPermissionsRequest: {
			id: "TestIamPermissionsRequest",
			type: "object",
			properties: {
				permissions: {
					items: {
						type: "string",
					},
					description:
						"The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).",
					type: "array",
				},
			},
			description: "Request message for `TestIamPermissions` method.",
		},
		AuditLogConfig: {
			type: "object",
			properties: {
				exemptedMembers: {
					type: "array",
					items: {
						type: "string",
					},
					description:
						"Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.",
				},
				logType: {
					description: "The log type that this config enables.",
					enumDescriptions: [
						"Default case. Should never be this.",
						"Admin reads. Example: CloudIAM getIamPolicy",
						"Data writes. Example: CloudSQL Users create",
						"Data reads. Example: CloudSQL Users list",
					],
					enum: [
						"LOG_TYPE_UNSPECIFIED",
						"ADMIN_READ",
						"DATA_WRITE",
						"DATA_READ",
					],
					type: "string",
				},
			},
			description:
				'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
			id: "AuditLogConfig",
		},
		SetIamPolicyRequest: {
			properties: {
				updateMask: {
					description:
						'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
					format: "google-fieldmask",
					type: "string",
				},
				policy: {
					$ref: "Policy",
					description:
						"REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.",
				},
			},
			description: "Request message for `SetIamPolicy` method.",
			id: "SetIamPolicyRequest",
			type: "object",
		},
	},
	revision: "20221206",
	description:
		"Allows developers to manage billing for their Google Cloud Platform projects programmatically.",
	title: "Cloud Billing API",
	fullyEncodeReservedExpansion: true,
	servicePath: "",
	ownerName: "Google",
	parameters: {
		oauth_token: {
			location: "query",
			description: "OAuth 2.0 token for the current user.",
			type: "string",
		},
		fields: {
			description:
				"Selector specifying which fields to include in a partial response.",
			type: "string",
			location: "query",
		},
		prettyPrint: {
			default: "true",
			location: "query",
			description: "Returns response with indentations and line breaks.",
			type: "boolean",
		},
		"$.xgafv": {
			location: "query",
			enumDescriptions: ["v1 error format", "v2 error format"],
			description: "V1 error format.",
			type: "string",
			enum: ["1", "2"],
		},
		alt: {
			default: "json",
			description: "Data format for response.",
			type: "string",
			enumDescriptions: [
				"Responses with Content-Type of application/json",
				"Media download with context-dependent Content-Type",
				"Responses with Content-Type of application/x-protobuf",
			],
			location: "query",
			enum: ["json", "media", "proto"],
		},
		upload_protocol: {
			description: 'Upload protocol for media (e.g. "raw", "multipart").',
			location: "query",
			type: "string",
		},
		access_token: {
			location: "query",
			description: "OAuth access token.",
			type: "string",
		},
		quotaUser: {
			description:
				"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.",
			type: "string",
			location: "query",
		},
		callback: {
			location: "query",
			type: "string",
			description: "JSONP",
		},
		key: {
			location: "query",
			description:
				"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
			type: "string",
		},
		uploadType: {
			description:
				'Legacy upload protocol for media (e.g. "media", "multipart").',
			type: "string",
			location: "query",
		},
	},
	documentationLink: "https://cloud.google.com/billing/",
	resources: {
		billingAccounts: {
			resources: {
				projects: {
					methods: {
						list: {
							response: {
								$ref: "ListProjectBillingInfoResponse",
							},
							path: "v1/{+name}/projects",
							description:
								"Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).",
							parameterOrder: ["name"],
							flatPath:
								"v1/billingAccounts/{billingAccountsId}/projects",
							id: "cloudbilling.billingAccounts.projects.list",
							parameters: {
								pageSize: {
									format: "int32",
									type: "integer",
									description:
										"Requested page size. The maximum page size is 100; this is also the default.",
									location: "query",
								},
								name: {
									pattern: "^billingAccounts/[^/]+$",
									location: "path",
									type: "string",
									required: true,
									description:
										"Required. The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.",
								},
								pageToken: {
									type: "string",
									location: "query",
									description:
										"A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned.",
								},
							},
							scopes: [
								"https://www.googleapis.com/auth/cloud-billing",
								"https://www.googleapis.com/auth/cloud-billing.readonly",
								"https://www.googleapis.com/auth/cloud-platform",
							],
							httpMethod: "GET",
						},
					},
				},
			},
			methods: {
				patch: {
					parameterOrder: ["name"],
					response: {
						$ref: "BillingAccount",
					},
					description:
						"Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.",
					request: {
						$ref: "BillingAccount",
					},
					flatPath: "v1/billingAccounts/{billingAccountsId}",
					httpMethod: "PATCH",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					path: "v1/{+name}",
					id: "cloudbilling.billingAccounts.patch",
					parameters: {
						name: {
							location: "path",
							required: true,
							type: "string",
							description:
								"Required. The name of the billing account resource to be updated.",
							pattern: "^billingAccounts/[^/]+$",
						},
						updateMask: {
							description:
								'The update mask applied to the resource. Only "display_name" is currently supported.',
							type: "string",
							location: "query",
							format: "google-fieldmask",
						},
					},
				},
				getIamPolicy: {
					httpMethod: "GET",
					path: "v1/{+resource}:getIamPolicy",
					id: "cloudbilling.billingAccounts.getIamPolicy",
					parameterOrder: ["resource"],
					response: {
						$ref: "Policy",
					},
					parameters: {
						resource: {
							location: "path",
							type: "string",
							required: true,
							description:
								"REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.",
							pattern: "^billingAccounts/[^/]+$",
						},
						"options.requestedPolicyVersion": {
							description:
								"Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).",
							location: "query",
							type: "integer",
							format: "int32",
						},
					},
					description:
						"Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-billing.readonly",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					flatPath:
						"v1/billingAccounts/{billingAccountsId}:getIamPolicy",
				},
				list: {
					parameters: {
						pageSize: {
							description:
								"Requested page size. The maximum page size is 100; this is also the default.",
							format: "int32",
							type: "integer",
							location: "query",
						},
						filter: {
							location: "query",
							description:
								'Options for how to filter the returned billing accounts. Currently this only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided reseller billing account. (e.g. "master_billing_account=billingAccounts/012345-678901-ABCDEF"). Boolean algebra and other fields are not currently supported.',
							type: "string",
						},
						pageToken: {
							description:
								"A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned.",
							location: "query",
							type: "string",
						},
					},
					parameterOrder: [],
					flatPath: "v1/billingAccounts",
					response: {
						$ref: "ListBillingAccountsResponse",
					},
					path: "v1/billingAccounts",
					id: "cloudbilling.billingAccounts.list",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-billing.readonly",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					description:
						"Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).",
					httpMethod: "GET",
				},
				testIamPermissions: {
					response: {
						$ref: "TestIamPermissionsResponse",
					},
					parameters: {
						resource: {
							required: true,
							type: "string",
							location: "path",
							description:
								"REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.",
							pattern: "^billingAccounts/[^/]+$",
						},
					},
					httpMethod: "POST",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-billing.readonly",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					id: "cloudbilling.billingAccounts.testIamPermissions",
					request: {
						$ref: "TestIamPermissionsRequest",
					},
					flatPath:
						"v1/billingAccounts/{billingAccountsId}:testIamPermissions",
					path: "v1/{+resource}:testIamPermissions",
					description:
						"Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.",
					parameterOrder: ["resource"],
				},
				get: {
					id: "cloudbilling.billingAccounts.get",
					parameters: {
						name: {
							description:
								"Required. The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`.",
							type: "string",
							required: true,
							pattern: "^billingAccounts/[^/]+$",
							location: "path",
						},
					},
					flatPath: "v1/billingAccounts/{billingAccountsId}",
					path: "v1/{+name}",
					httpMethod: "GET",
					response: {
						$ref: "BillingAccount",
					},
					parameterOrder: ["name"],
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-billing.readonly",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					description:
						"Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).",
				},
				setIamPolicy: {
					id: "cloudbilling.billingAccounts.setIamPolicy",
					parameterOrder: ["resource"],
					response: {
						$ref: "Policy",
					},
					parameters: {
						resource: {
							pattern: "^billingAccounts/[^/]+$",
							location: "path",
							required: true,
							description:
								"REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.",
							type: "string",
						},
					},
					httpMethod: "POST",
					flatPath:
						"v1/billingAccounts/{billingAccountsId}:setIamPolicy",
					request: {
						$ref: "SetIamPolicyRequest",
					},
					path: "v1/{+resource}:setIamPolicy",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					description:
						"Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).",
				},
				create: {
					httpMethod: "POST",
					request: {
						$ref: "BillingAccount",
					},
					parameters: {},
					flatPath: "v1/billingAccounts",
					path: "v1/billingAccounts",
					response: {
						$ref: "BillingAccount",
					},
					id: "cloudbilling.billingAccounts.create",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					description:
						"This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.",
					parameterOrder: [],
				},
			},
		},
		projects: {
			methods: {
				updateBillingInfo: {
					parameters: {
						name: {
							pattern: "^projects/[^/]+$",
							type: "string",
							location: "path",
							required: true,
							description:
								"Required. The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.",
						},
					},
					response: {
						$ref: "ProjectBillingInfo",
					},
					request: {
						$ref: "ProjectBillingInfo",
					},
					path: "v1/{+name}/billingInfo",
					description:
						"Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.",
					flatPath: "v1/projects/{projectsId}/billingInfo",
					id: "cloudbilling.projects.updateBillingInfo",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					parameterOrder: ["name"],
					httpMethod: "PUT",
				},
				getBillingInfo: {
					description:
						"Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.",
					path: "v1/{+name}/billingInfo",
					response: {
						$ref: "ProjectBillingInfo",
					},
					httpMethod: "GET",
					id: "cloudbilling.projects.getBillingInfo",
					parameters: {
						name: {
							type: "string",
							required: true,
							location: "path",
							description:
								"Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.",
							pattern: "^projects/[^/]+$",
						},
					},
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-billing.readonly",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					parameterOrder: ["name"],
					flatPath: "v1/projects/{projectsId}/billingInfo",
				},
			},
		},
		services: {
			methods: {
				list: {
					parameters: {
						pageToken: {
							description:
								"A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListServices` call. If unspecified, the first page of results is returned.",
							type: "string",
							location: "query",
						},
						pageSize: {
							format: "int32",
							location: "query",
							description:
								"Requested page size. Defaults to 5000.",
							type: "integer",
						},
					},
					httpMethod: "GET",
					flatPath: "v1/services",
					response: {
						$ref: "ListServicesResponse",
					},
					description: "Lists all public cloud services.",
					path: "v1/services",
					id: "cloudbilling.services.list",
					scopes: [
						"https://www.googleapis.com/auth/cloud-billing",
						"https://www.googleapis.com/auth/cloud-billing.readonly",
						"https://www.googleapis.com/auth/cloud-platform",
					],
					parameterOrder: [],
				},
			},
			resources: {
				skus: {
					methods: {
						list: {
							description:
								"Lists all publicly available SKUs for a given cloud service.",
							path: "v1/{+parent}/skus",
							httpMethod: "GET",
							parameters: {
								parent: {
									location: "path",
									pattern: "^services/[^/]+$",
									description:
										'Required. The name of the service. Example: "services/DA34-426B-A397"',
									type: "string",
									required: true,
								},
								endTime: {
									type: "string",
									description:
										"Optional exclusive end time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).",
									location: "query",
									format: "google-datetime",
								},
								pageToken: {
									type: "string",
									location: "query",
									description:
										"A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListSkus` call. If unspecified, the first page of results is returned.",
								},
								pageSize: {
									format: "int32",
									description:
										"Requested page size. Defaults to 5000.",
									location: "query",
									type: "integer",
								},
								currencyCode: {
									type: "string",
									description:
										"The ISO 4217 currency code for the pricing info in the response proto. Will use the conversion rate as of start_time. Optional. If not specified USD will be used.",
									location: "query",
								},
								startTime: {
									type: "string",
									location: "query",
									format: "google-datetime",
									description:
										"Optional inclusive start time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most).",
								},
							},
							flatPath: "v1/services/{servicesId}/skus",
							id: "cloudbilling.services.skus.list",
							parameterOrder: ["parent"],
							response: {
								$ref: "ListSkusResponse",
							},
							scopes: [
								"https://www.googleapis.com/auth/cloud-billing",
								"https://www.googleapis.com/auth/cloud-billing.readonly",
								"https://www.googleapis.com/auth/cloud-platform",
							],
						},
					},
				},
			},
		},
	},
	canonicalName: "Cloudbilling",
	ownerDomain: "google.com",
	icons: {
		x16: "http://www.google.com/images/icons/product/search-16.gif",
		x32: "http://www.google.com/images/icons/product/search-32.gif",
	},
	baseUrl: "https://cloudbilling.googleapis.com/",
	batchPath: "batch",
	auth: {
		oauth2: {
			scopes: {
				"https://www.googleapis.com/auth/cloud-platform": {
					description:
						"See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
				},
				"https://www.googleapis.com/auth/cloud-billing.readonly": {
					description:
						"View your Google Cloud Platform billing accounts",
				},
				"https://www.googleapis.com/auth/cloud-billing": {
					description:
						"View and manage your Google Cloud Platform billing accounts",
				},
			},
		},
	},
	kind: "discovery#restDescription",
	name: "cloudbilling",
	mtlsRootUrl: "https://cloudbilling.mtls.googleapis.com/",
	version: "v1",
};

export const GCP_SERVICES = {
	services: [
		{
			name: "services/0017-8C5E-5B91",
			serviceId: "0017-8C5E-5B91",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 7.8 (v20200922) - Security Hardened",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/002A-FAF7-9793",
			serviceId: "002A-FAF7-9793",
			displayName: "Google Click to Deploy Puppet",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0042-8437-FF55",
			serviceId: "0042-8437-FF55",
			displayName: "Adverity Data Connectors",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/005A-0B51-C56E",
			serviceId: "005A-0B51-C56E",
			displayName:
				"Techlatest.net Metabase Data Visualization & BI Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0069-3716-5463",
			serviceId: "0069-3716-5463",
			displayName: "Qubole Data Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/008F-652C-F842",
			serviceId: "008F-652C-F842",
			displayName: "Nventify Imagizer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0094-29B1-96E7",
			serviceId: "0094-29B1-96E7",
			displayName: "Live Stream API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0095-7665-C074",
			serviceId: "0095-7665-C074",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2008 R2 Benchmark v3.0.1 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/00C7-CE6D-B98F",
			serviceId: "00C7-CE6D-B98F",
			displayName: "TigerGraph Inc. TigerGraph Developer Edition 2-6-3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/00E4-BD19-6904",
			serviceId: "00E4-BD19-6904",
			displayName: "CommvaultVMDeploymentSolution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0105-B240-3655",
			serviceId: "0105-B240-3655",
			displayName:
				"Cloud Infrastructure Services Load Balancer using NGINX (HTTP, Application, TCP)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/01BA-36F6-AA33",
			serviceId: "01BA-36F6-AA33",
			displayName: "Web Risk",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/01C8-1FC5-46AB",
			serviceId: "01C8-1FC5-46AB",
			displayName: "Tempered Networks Tempered Airwall Appliance v2.2.8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/01D9-9574-AF68",
			serviceId: "01D9-9574-AF68",
			displayName:
				"CIS (Center for Internet Security) CIS PostgreSQL 11 on CentOS Linux 7 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/01F9-FAF7-CFA5",
			serviceId: "01F9-FAF7-CFA5",
			displayName: "Twinword Inc. Word Dictionary API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0226-575D-63AA",
			serviceId: "0226-575D-63AA",
			displayName:
				"Cloud Infrastructure Services osTicket Server Helpdesk Solution on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0231-1FBA-4417",
			serviceId: "0231-1FBA-4417",
			displayName: "NVIDIA Gaming PC - Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0245-C3C9-3864",
			serviceId: "0245-C3C9-3864",
			displayName: "Geolocation API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/0296-B408-6B99",
			serviceId: "0296-B408-6B99",
			displayName: "ZETTALANE SYSTEMS LLC MayaData Cloud File Gateway",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/029B-38E4-68C9",
			serviceId: "029B-38E4-68C9",
			displayName:
				"Cloud Infrastructure Services Apache Web Server + MySQL + phpMyadmin on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/02DA-B362-D983",
			serviceId: "02DA-B362-D983",
			displayName: "Cloud Text-to-Speech API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/02E3-5518-2F6D",
			serviceId: "02E3-5518-2F6D",
			displayName:
				"F5 Networks F5 Per-App VE  Advanced WAF  (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0314-C555-3A8D",
			serviceId: "0314-C555-3A8D",
			displayName: "Techlatest.net SellOdoo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/032C-45D7-ADF2",
			serviceId: "032C-45D7-ADF2",
			displayName:
				"Oneledger Technology Inc. OneLedger Kainos Mainnet Full Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/032C-E934-A7D6",
			serviceId: "032C-E934-A7D6",
			displayName: "Miri Infotech ELK powered by MIRI",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0393-AA9E-2E8F",
			serviceId: "0393-AA9E-2E8F",
			displayName: "Aiven for Redis",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/039C-114D-082B",
			serviceId: "039C-114D-082B",
			displayName: "AERIS Aeris Integration Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/03A3-DC58-2708",
			serviceId: "03A3-DC58-2708",
			displayName: "Trillo Inc. File Manager and SFTP for Cloud Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/03C0-8240-4A98",
			serviceId: "03C0-8240-4A98",
			displayName: "Cognosys Inc. Secured Moodle on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/03ED-D15C-9804",
			serviceId: "03ED-D15C-9804",
			displayName: "Cognosys Inc. nopCommerce on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0466-AA71-38DA",
			serviceId: "0466-AA71-38DA",
			displayName: "Intento, Inc. Intento Enterprise MT Hub",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0466-DD9E-0287",
			serviceId: "0466-DD9E-0287",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - GOOD  (PAYG, 10Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0483-6CB2-9ABB",
			serviceId: "0483-6CB2-9ABB",
			displayName: "Infoworks.io, Inc. Infoworks DataFoundry",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/04BF-4769-E87A",
			serviceId: "04BF-4769-E87A",
			displayName: "Pivotal Software, Inc. Pivotal Greenplum BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/04C4-B046-D8B2",
			serviceId: "04C4-B046-D8B2",
			displayName: "Cloud Natural Language",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/04F6-A7A8-EDF4",
			serviceId: "04F6-A7A8-EDF4",
			displayName: "Etrans Lab LNMP Stack With Webmin",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0530-033B-C90A",
			serviceId: "0530-033B-C90A",
			displayName:
				"Cloud Infrastructure Services Webmin GUI Admin Control Panel for CentOS 8.2 Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0544-F909-5498",
			serviceId: "0544-F909-5498",
			displayName: "Miri Infotech flarum-08-09-2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0579-62CF-63C1",
			serviceId: "0579-62CF-63C1",
			displayName: "Google Click to Deploy OpenCart",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0585-9FB4-1E3D",
			serviceId: "0585-9FB4-1E3D",
			displayName: "DataStax API (Dev)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/05C3-7D8F-2E8F",
			serviceId: "05C3-7D8F-2E8F",
			displayName: "Genymotion Cloud: Android 8.1 (oreo)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/05C5-45BF-8282",
			serviceId: "05C5-45BF-8282",
			displayName: "Citrix Systems, Inc. Citrix SD-WAN Standard Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/05C5-F1A3-3EBA",
			serviceId: "05C5-F1A3-3EBA",
			displayName:
				"Calculated Systems LLC Calculated Systems Certified Nifi",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/05CA-905B-FE3E",
			serviceId: "05CA-905B-FE3E",
			displayName:
				"Cognosys Inc. SQL Server Web 2019 on Linux - Ubuntu 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/05CF-B4FB-4E73",
			serviceId: "05CF-B4FB-4E73",
			displayName:
				"Cloud Infrastructure Services Proxy Server - Squid Proxy Cache on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/060F-09D1-76BF",
			serviceId: "060F-09D1-76BF",
			displayName: "Google Click to Deploy Ceph Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0648-8D63-9113",
			serviceId: "0648-8D63-9113",
			displayName: "Grafana Labs Grafana Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0665-C160-E827",
			serviceId: "0665-C160-E827",
			displayName: "Jetware PostgreSQL 9.6",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/06DB-6849-B547",
			serviceId: "06DB-6849-B547",
			displayName: "Zabbix SIA Zabbix Proxy 5.0 - Appliance with SQLite3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/06EF-B241-C096",
			serviceId: "06EF-B241-C096",
			displayName: "Bitnami TYPO3 Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/06F5-38F6-036A",
			serviceId: "06F5-38F6-036A",
			displayName: "Prediction",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0773-E9BA-959C",
			serviceId: "0773-E9BA-959C",
			displayName:
				"NVIDIA GPU Cloud Image for Deep Learning, Data Science,  and HPC",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0793-445D-C877",
			serviceId: "0793-445D-C877",
			displayName: "Google Click to Deploy Cassandra",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/07AF-A280-7D4E",
			serviceId: "07AF-A280-7D4E",
			displayName: "Pixit Media PixStor Cloud - Balanced Tier",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/07DC-15D0-A6E6",
			serviceId: "07DC-15D0-A6E6",
			displayName: "Plesk Business & Collaboration Edition PREMIUM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0889-4E59-60BB",
			serviceId: "0889-4E59-60BB",
			displayName: "Kong Konnect Enterprise 2.5 (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0895-7858-AB49",
			serviceId: "0895-7858-AB49",
			displayName: "Partner Demo Test WordPress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/08B3-A6E6-BC4C",
			serviceId: "08B3-A6E6-BC4C",
			displayName: "Bitnami Trac Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/08CB-3A3E-55D0",
			serviceId: "08CB-3A3E-55D0",
			displayName: "Cognosys Inc. Moodle on CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/08CF-542F-79CD",
			serviceId: "08CF-542F-79CD",
			displayName: "Maven Wave Partners LLC Cudinator",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/08E2-8B5A-67A5",
			serviceId: "08E2-8B5A-67A5",
			displayName:
				"End-to-end Testing Cloud Marketplace Test VM Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/08F1-4F44-8F77",
			serviceId: "08F1-4F44-8F77",
			displayName: "Miri Infotech Orangehrm",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0907-76FC-2D82",
			serviceId: "0907-76FC-2D82",
			displayName: "Cognosys Inc. Wireshark on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/096B-2777-7034",
			serviceId: "096B-2777-7034",
			displayName:
				"Cognosys Inc. Visual Studio 2017 Enterprise on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/098B-FCB7-EA00",
			serviceId: "098B-FCB7-EA00",
			displayName:
				"Cloud Infrastructure Services Jenkins Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/09B4-5C41-3168",
			serviceId: "09B4-5C41-3168",
			displayName: "Bitnami eXo Platform Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/09EA-6B4A-550E",
			serviceId: "09EA-6B4A-550E",
			displayName: "Cognosys Inc. Secured PrestaShop on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0A07-96A6-8158",
			serviceId: "0A07-96A6-8158",
			displayName: "OpenVPN Inc. OpenVPN Access Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0A1B-8300-DD2F",
			serviceId: "0A1B-8300-DD2F",
			displayName: "XtremeData, Inc. dbX",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0A7C-45F4-3FA2",
			serviceId: "0A7C-45F4-3FA2",
			displayName:
				"Pulse Secure, LLC Traffic Manager Standard Edition & WAF - 200 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0A84-D90D-8FF5",
			serviceId: "0A84-D90D-8FF5",
			displayName: "Test Marketplace Procurable OP Full Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0AA9-12E2-E3B3",
			serviceId: "0AA9-12E2-E3B3",
			displayName: "SAP HANA, express edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0AC2-4B25-C429",
			serviceId: "0AC2-4B25-C429",
			displayName: "Geocoding API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/0AD3-8373-BA0C",
			serviceId: "0AD3-8373-BA0C",
			displayName: "Miri Infotech BigtreeCMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0AE8-6817-BF80",
			serviceId: "0AE8-6817-BF80",
			displayName: "Cognosys Inc. Apache Web Server with CentOS 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0B17-CB77-0CFB",
			serviceId: "0B17-CB77-0CFB",
			displayName: "Etrans Lab wiki",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0B33-32A6-0195",
			serviceId: "0B33-32A6-0195",
			displayName: "Etrans Lab WooCommerce",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0B3D-3970-6824",
			serviceId: "0B3D-3970-6824",
			displayName: "Cognosys Inc. Magento on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0B40-B27E-35EE",
			serviceId: "0B40-B27E-35EE",
			displayName: "ScientiaMobile Inc. WURFL Microservice Basic",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0B66-A72A-124C",
			serviceId: "0B66-A72A-124C",
			displayName: "Cognosys Inc. Dolibarr on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0B9E-6C8C-DD9D",
			serviceId: "0B9E-6C8C-DD9D",
			displayName: "Miri Infotech JENKINS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0BB0-D027-38CF",
			serviceId: "0BB0-D027-38CF",
			displayName:
				"Miri Infotech PREDICTIVE ANALYTICS FRAMEWORK R HADOOP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0BCC-06B3-2936",
			serviceId: "0BCC-06B3-2936",
			displayName:
				"Fortinet Inc. FortiGate Next-Generation Firewall (PAYG)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0C02-7C8D-EF19",
			serviceId: "0C02-7C8D-EF19",
			displayName: "Miri Infotech Nodejs",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0C29-4558-56A5",
			serviceId: "0C29-4558-56A5",
			displayName:
				"Cloud Infrastructure Services Active Directory Certificate Services PKI on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0C76-2443-BB08",
			serviceId: "0C76-2443-BB08",
			displayName: "Twinword Inc. Twinword Text Analysis API Bundle",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0CBD-0159-FE5C",
			serviceId: "0CBD-0159-FE5C",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Premium Edition - 5 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0CDB-535D-F102",
			serviceId: "0CDB-535D-F102",
			displayName: "Bitnami Ghost Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0CE3-7ECE-F8E8",
			serviceId: "0CE3-7ECE-F8E8",
			displayName: "Techlatest.net Money Saver VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0CE5-D17E-5150",
			serviceId: "0CE5-D17E-5150",
			displayName: "Panzura Inc. Panzura Freedom Filer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0D0B-A6D0-97CF",
			serviceId: "0D0B-A6D0-97CF",
			displayName: "Genymotion Cloud: Android 9.0 (pie)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0D19-EC86-35B0",
			serviceId: "0D19-EC86-35B0",
			displayName: "Cloud Data Fusion",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0D8A-2359-6554",
			serviceId: "0D8A-2359-6554",
			displayName: "Fluid Numerics RCC-WRF",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0D8E-1AE9-3C0D",
			serviceId: "0D8E-1AE9-3C0D",
			displayName: "Bitnami MODX Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0DB2-DA22-4680",
			serviceId: "0DB2-DA22-4680",
			displayName: "Hammerspace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0DB7-4F53-9E69",
			serviceId: "0DB7-4F53-9E69",
			displayName:
				"Cognosys Inc. SQL Server 2019 Web on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0DC6-1D65-6DAA",
			serviceId: "0DC6-1D65-6DAA",
			displayName: "Partner Demo Test WordPress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0DCF-AFEF-00F3",
			serviceId: "0DCF-AFEF-00F3",
			displayName:
				"Cloud Infrastructure Services Windows Server 2016 Core Minimal OS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0DD1-1C43-950F",
			serviceId: "0DD1-1C43-950F",
			displayName: "Cavirin Systems Cavirin CyberPosture",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0DD7-0FEC-3F5B",
			serviceId: "0DD7-0FEC-3F5B",
			displayName: "TigerGraph Inc. TigerGraph Developer Edition 2.5.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0E0F-DA3F-B05F",
			serviceId: "0E0F-DA3F-B05F",
			displayName: "Cognosys Inc. OrangeHRM on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0E58-DAEF-CFCC",
			serviceId: "0E58-DAEF-CFCC",
			displayName: "Cognosys Inc. Secured OrangeHRM on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0E68-026D-C6B6",
			serviceId: "0E68-026D-C6B6",
			displayName: "Orbs Ltd orbs-gamma-devkit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0E69-0162-6B36",
			serviceId: "0E69-0162-6B36",
			displayName:
				"Techlatest.net MUJEFA - Python AI & Machine Learning kit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0E82-C9A8-76B7",
			serviceId: "0E82-C9A8-76B7",
			displayName: "Miri Infotech typesetter",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0EA9-AFFC-51C1",
			serviceId: "0EA9-AFFC-51C1",
			displayName: "Game Services API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0EC0-B489-B62B",
			serviceId: "0EC0-B489-B62B",
			displayName: "Auto Disbursement Demo auto-pay-demo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0EC4-1F92-5D3A",
			serviceId: "0EC4-1F92-5D3A",
			displayName: "Miri Infotech OPENEMR",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0F0F-56A0-A324",
			serviceId: "0F0F-56A0-A324",
			displayName: "LiteSpeed Technologies openlitespeed-rails",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0F18-944B-FC22",
			serviceId: "0F18-944B-FC22",
			displayName:
				"Cloud Infrastructure Services Cloud Print Server on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0F7B-E3A0-A883",
			serviceId: "0F7B-E3A0-A883",
			displayName: "Bitnami NATS Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0F7C-A0C5-C2B7",
			serviceId: "0F7C-A0C5-C2B7",
			displayName: "NVIDIA TensorFlow from NVIDIA",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0FB0-A08E-55E6",
			serviceId: "0FB0-A08E-55E6",
			displayName: "Twinword Inc. Emotion Analysis API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/0FFD-2C95-82EC",
			serviceId: "0FFD-2C95-82EC",
			displayName: "Bitnami AbanteCart Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1002-DCF2-CCE5",
			serviceId: "1002-DCF2-CCE5",
			displayName:
				"Cloud Infrastructure Services MariaDB Server on Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1009-EB12-B90A",
			serviceId: "1009-EB12-B90A",
			displayName: "Pixit Media PixStor Cloud Solo - 5 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/10A0-34D4-21F6",
			serviceId: "10A0-34D4-21F6",
			displayName:
				"Bitnami WordPress Certified by Bitnami and Automattic",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/10C7-0687-DBD2",
			serviceId: "10C7-0687-DBD2",
			displayName:
				"Cognosys Inc. Secured SQL Server 2016 Standard on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/10ED-E1FF-CC33",
			serviceId: "10ED-E1FF-CC33",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Standard Edition - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1144-8BC5-52F6",
			serviceId: "1144-8BC5-52F6",
			displayName: "ZETTALANE SYSTEMS LLC MayaScale Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1156-0F2E-624C",
			serviceId: "1156-0F2E-624C",
			displayName: "Cognosys Inc. LAMP on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1175-58AD-DF6F",
			serviceId: "1175-58AD-DF6F",
			displayName:
				"Cognosys Inc. SQL Server 2016 Express on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1195-B6D0-C1CE",
			serviceId: "1195-B6D0-C1CE",
			displayName:
				"Pulse Secure, LLC Traffic Manager Standard Edition - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/11E3-2164-7ABB",
			serviceId: "11E3-2164-7ABB",
			displayName:
				"Cloud Infrastructure Services Webmin GUI Admin Control Panel for Ubuntu Server 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/11F2-A380-6357",
			serviceId: "11F2-A380-6357",
			displayName: "Maps Elevation API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/12BA-A8F0-838E",
			serviceId: "12BA-A8F0-838E",
			displayName: "claire-auto-demo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/12EC-8E8E-C397",
			serviceId: "12EC-8E8E-C397",
			displayName:
				"Cloud Infrastructure Services Ubuntu Server 20.04 Minimal OS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1302-8579-1C82",
			serviceId: "1302-8579-1C82",
			displayName: "Live Objects Inc. live-objects-pip-k8s",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1303-5374-2D11",
			serviceId: "1303-5374-2D11",
			displayName: "Perforce Software Inc. OpenLogic Rocky Linux 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1309-F64E-BAE8",
			serviceId: "1309-F64E-BAE8",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 6 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1340-ED33-FA85",
			serviceId: "1340-ED33-FA85",
			displayName: "Miri Infotech Fluxbb",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1348-FACC-9796",
			serviceId: "1348-FACC-9796",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 3.0.5 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1394-64A3-F0C6",
			serviceId: "1394-64A3-F0C6",
			displayName: "Google Click to Deploy Deep Learning VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/13B5-5C1A-2205",
			serviceId: "13B5-5C1A-2205",
			displayName:
				"Cloud Infrastructure Services Packer on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/13D9-8CCC-D72C",
			serviceId: "13D9-8CCC-D72C",
			displayName:
				"InterSystems Corporation InterSystems IRIS Data Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/13E6-5294-D5FA",
			serviceId: "13E6-5294-D5FA",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1429-16A3-08BC",
			serviceId: "1429-16A3-08BC",
			displayName: "Cognosys Inc. Apache Web Server with CentOS 7.8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1448-D63F-0DA7",
			serviceId: "1448-D63F-0DA7",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BETTER  (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1462-9D0E-79F2",
			serviceId: "1462-9D0E-79F2",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2019 STIG Benchmark",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/149C-F9EC-3994",
			serviceId: "149C-F9EC-3994",
			displayName: "Artifact Registry",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/14A2-8AB3-2E09",
			serviceId: "14A2-8AB3-2E09",
			displayName: "NodeSource N|Solid",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/14AB-CA19-9762",
			serviceId: "14AB-CA19-9762",
			displayName: "Google Click to Deploy Elasticsearch",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/14BC-E05F-A9BB",
			serviceId: "14BC-E05F-A9BB",
			displayName: "Kaminario, inc. Silk Cloud Data Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/14E6-EF9E-CFBC",
			serviceId: "14E6-EF9E-CFBC",
			displayName:
				"Cloud Infrastructure Services Weka Machine Learning on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/14E7-BA84-3B4D",
			serviceId: "14E7-BA84-3B4D",
			displayName:
				"DataStax Distribution of Apache Cassandra 8x5 Support",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/150C-D174-4C61",
			serviceId: "150C-D174-4C61",
			displayName: "StraaS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/152E-C115-5142",
			serviceId: "152E-C115-5142",
			displayName: "Cloud Run",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1535-C8C3-9833",
			serviceId: "1535-C8C3-9833",
			displayName: "CLOUDUP INFOTECH PRIVATE LIMITED Jenkins-automation",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1541-1D5B-F621",
			serviceId: "1541-1D5B-F621",
			displayName: "CloudLinux Inc CloudLinux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1550-BA40-4980",
			serviceId: "1550-BA40-4980",
			displayName: "Google Click to Deploy WordPress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/155F-CBED-DAC8",
			serviceId: "155F-CBED-DAC8",
			displayName:
				"Cognosys Inc. Team Foundation Server 2015 on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1566-7627-590B",
			serviceId: "1566-7627-590B",
			displayName: "Bitnami JasperReports Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/158F-556F-4845",
			serviceId: "158F-556F-4845",
			displayName:
				"Cloud Infrastructure Services Active Directory Domain Controller 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/159C-0224-8ACB",
			serviceId: "159C-0224-8ACB",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2016 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/160C-B1C2-FE08",
			serviceId: "160C-B1C2-FE08",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Standard Edition - 10 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/162C-B75F-B587",
			serviceId: "162C-B75F-B587",
			displayName: "Bitnami PostgreSQL Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1630-702E-DB71",
			serviceId: "1630-702E-DB71",
			displayName: "Techlatest.net r-developer-suit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/166A-0DE6-82B1",
			serviceId: "166A-0DE6-82B1",
			displayName: "Avantra",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/169F-7D34-4D47",
			serviceId: "169F-7D34-4D47",
			displayName: "Cognosys Inc. MediaWiki on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/16B8-3DDA-9F10",
			serviceId: "16B8-3DDA-9F10",
			displayName: "BigQuery Reservation API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/16C1-D2F8-3542",
			serviceId: "16C1-D2F8-3542",
			displayName: "Bitnami TensorFlow Serving Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1714-9C53-0C62",
			serviceId: "1714-9C53-0C62",
			displayName:
				"Cloud Infrastructure Services Joomla Server + MySQL Server + Apache + phpMyadmin on CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1748-5F88-6EB9",
			serviceId: "1748-5F88-6EB9",
			displayName: "Cognosys Inc. CrushFTP on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1763-A91B-9ECE",
			serviceId: "1763-A91B-9ECE",
			displayName: "ANALOG INNOVATION PVT LTD PARITY V2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/177D-86F1-48C9",
			serviceId: "177D-86F1-48C9",
			displayName: "Google Quickstart Simple pre-configured Debian VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1780-5EFE-7CFE",
			serviceId: "1780-5EFE-7CFE",
			displayName: "Wowza Media Systems Wowza Streaming Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/178D-0AAC-319C",
			serviceId: "178D-0AAC-319C",
			displayName:
				"Cloud Infrastructure Services Webmin GUI Admin Control Panel for Ubuntu Server 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1819-2131-A20D",
			serviceId: "1819-2131-A20D",
			displayName: "Google Click to Deploy Kafka",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/181E-332A-5B53",
			serviceId: "181E-332A-5B53",
			displayName: "Miri Infotech ACTIVEMQ",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1830-9C37-5DEA",
			serviceId: "1830-9C37-5DEA",
			displayName: "Miri Infotech Collabtive",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/183D-0753-AE77",
			serviceId: "183D-0753-AE77",
			displayName: "Twinword Inc. Topic Tagging API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1844-152A-BC3A",
			serviceId: "1844-152A-BC3A",
			displayName: "Bitnami Odoo Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1866-8E60-9018",
			serviceId: "1866-8E60-9018",
			displayName: "Ergon Informatik AG Airlock Gateway 7.7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/18C2-E1D3-D7A1",
			serviceId: "18C2-E1D3-D7A1",
			displayName: "GitLab Community Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/18FC-D122-7B50",
			serviceId: "18FC-D122-7B50",
			displayName: "CloudBees Jenkins Support",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1902-5DAC-9560",
			serviceId: "1902-5DAC-9560",
			displayName: "NVIDIA HPC SDK GPU-Optimized Image",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1934-AA85-20F9",
			serviceId: "1934-AA85-20F9",
			displayName: "Maps API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/194C-3B25-4709",
			serviceId: "194C-3B25-4709",
			displayName: "Techlatest.net pytorch-kit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1987-0190-5C09",
			serviceId: "1987-0190-5C09",
			displayName: "Denovolab class4-v6",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1992-3666-B975",
			serviceId: "1992-3666-B975",
			displayName: "Cloud Composer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/19A9-7B30-50FC",
			serviceId: "19A9-7B30-50FC",
			displayName: "Bitnami Noalyss Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1A35-C5C7-1D7C",
			serviceId: "1A35-C5C7-1D7C",
			displayName: "Google Click to Deploy Drupal",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1A5E-92D8-5F05",
			serviceId: "1A5E-92D8-5F05",
			displayName: "Shape Security Connect",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1A7E-0F2E-A252",
			serviceId: "1A7E-0F2E-A252",
			displayName: "Cloud Optimization",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1A9B-03E7-519D",
			serviceId: "1A9B-03E7-519D",
			displayName:
				"Cloud Infrastructure Services Microsoft Web Application Proxy - ADFS WAP 2016 Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1AA8-AAB6-920F",
			serviceId: "1AA8-AAB6-920F",
			displayName:
				"End-to-end Testing Cloud Marketplace Test BYOL Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1ABC-F3AF-9732",
			serviceId: "1ABC-F3AF-9732",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2016 Benchmark v1.0.0 Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1AC5-B450-39B6",
			serviceId: "1AC5-B450-39B6",
			displayName: "Trillo Inc. Trillo Cloud Applications",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1AD1-892F-A377",
			serviceId: "1AD1-892F-A377",
			displayName: "WitFoo, Inc. witfoo-precinct",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1AF9-4430-172E",
			serviceId: "1AF9-4430-172E",
			displayName: "NetApp, Inc. NetApp Cloud Volumes Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B17-0E4A-E355",
			serviceId: "1B17-0E4A-E355",
			displayName: "reCAPTCHA Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B18-3BA5-BC31",
			serviceId: "1B18-3BA5-BC31",
			displayName: "Cognosys Inc. NGINX on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B1B-541D-F4B5",
			serviceId: "1B1B-541D-F4B5",
			displayName:
				"Cognosys Inc. Wordpress on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B2D-0FE8-F57F",
			serviceId: "1B2D-0FE8-F57F",
			displayName: "Cognosys Inc. Limesurvey on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B40-507E-1D91",
			serviceId: "1B40-507E-1D91",
			displayName: "sureline-public sureedge-windows-byol",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B47-F2E0-E2AA",
			serviceId: "1B47-F2E0-E2AA",
			displayName: "Panzura Inc. Panzura Freedom Filer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B5E-5174-6680",
			serviceId: "1B5E-5174-6680",
			displayName:
				"Cloud Infrastructure Services Secure FTP Server on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B6C-F9CE-018F",
			serviceId: "1B6C-F9CE-018F",
			displayName: "Cognosys Inc. Mediawiki With CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1B99-7474-D779",
			serviceId: "1B99-7474-D779",
			displayName: "Redis Labs Redis Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1BD3-107D-60B7",
			serviceId: "1BD3-107D-60B7",
			displayName:
				"IBM Security QRadar Security Intelligence Platform Console v7.3.2 P1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1BDF-7F3C-8605",
			serviceId: "1BDF-7F3C-8605",
			displayName: "Jetware Redmine on PostgreSQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1C16-257B-75C6",
			serviceId: "1C16-257B-75C6",
			displayName:
				"NGINX, Inc NGINX Plus with NGINX App Protect - Premium (Ubuntu 20.04)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1C22-523C-CD6B",
			serviceId: "1C22-523C-CD6B",
			displayName: "MapTiler Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1C2D-8C78-EC58",
			serviceId: "1C2D-8C78-EC58",
			displayName: "Apigee",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1C46-E8A3-8CDF",
			serviceId: "1C46-E8A3-8CDF",
			displayName: "Cognosys Inc. Wordpress on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1C58-CF90-9614",
			serviceId: "1C58-CF90-9614",
			displayName: "Firebase Realtime Database",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1CB2-E83D-FE7E",
			serviceId: "1CB2-E83D-FE7E",
			displayName:
				"Cloud Infrastructure Services Active Directory Domain Controller 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1CEE-5281-AC2E",
			serviceId: "1CEE-5281-AC2E",
			displayName: "Kong Enterprise 2.1 (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1D18-DFE9-46A5",
			serviceId: "1D18-DFE9-46A5",
			displayName: "Expert System Cogito API Core",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1D49-C26A-6708",
			serviceId: "1D49-C26A-6708",
			displayName: "NGINX, Inc NGINX Plus Enterprise - CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1D5F-59A2-89EE",
			serviceId: "1D5F-59A2-89EE",
			displayName: "Geolytica INC Reverse Geocoder Lite",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1D85-EB86-2067",
			serviceId: "1D85-EB86-2067",
			displayName: "Robin.io Robin Cloud Native Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1D8C-8996-0F10",
			serviceId: "1D8C-8996-0F10",
			displayName: "Tidal Migrations Tidal Tools",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1D98-4621-6E15",
			serviceId: "1D98-4621-6E15",
			displayName: "Bitnami Liferay Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1DA2-CE77-525A",
			serviceId: "1DA2-CE77-525A",
			displayName: "Google Click to Deploy LAMP Stack",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1DB1-3CD3-35A3",
			serviceId: "1DB1-3CD3-35A3",
			displayName: "Translate",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1DC6-E5BD-A8F6",
			serviceId: "1DC6-E5BD-A8F6",
			displayName:
				"Google Click to Deploy Anthos Sample Deployment on Google Cloud (Preview)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1DFB-9FD4-B295",
			serviceId: "1DFB-9FD4-B295",
			displayName:
				"Cognosys Inc. SQL Server 2017 Express on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1E0A-E060-C394",
			serviceId: "1E0A-E060-C394",
			displayName: "Jetware AISE PyTorch CPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1E4A-3DB6-A242",
			serviceId: "1E4A-3DB6-A242",
			displayName: "Aerokube Software Selenoid",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1E68-F58E-696F",
			serviceId: "1E68-F58E-696F",
			displayName: "Sylabs, Inc Singularity-community-31",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1E6F-B488-4621",
			serviceId: "1E6F-B488-4621",
			displayName: "Google Click to Deploy RabbitMQ",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1EA9-446B-6CBF",
			serviceId: "1EA9-446B-6CBF",
			displayName: "Bitnami Mautic Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1EBF-DF09-7B8F",
			serviceId: "1EBF-DF09-7B8F",
			displayName:
				"Cognosys Inc. SecuredSharepoint2016 Standard on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1EC7-F003-7406",
			serviceId: "1EC7-F003-7406",
			displayName:
				"Palo Alto Networks, Inc. VM-Series Next-Generation Firewall (Bundle2)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1EC9-D4D4-929A",
			serviceId: "1EC9-D4D4-929A",
			displayName: "Frontline Hardened Debian 9",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1ED8-3C3C-1F3C",
			serviceId: "1ED8-3C3C-1F3C",
			displayName:
				"NVIDIA Image for AI using GPUs - Optimized for TensorFlow",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1EE9-313A-4A96",
			serviceId: "1EE9-313A-4A96",
			displayName: "Cognosys Inc. Dokuwiki on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F12-0A0C-1719",
			serviceId: "1F12-0A0C-1719",
			displayName: "Ionic Security, Inc. Ionic Machina",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F14-4801-0E16",
			serviceId: "1F14-4801-0E16",
			displayName: "Cloud Scheduler",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F19-3B91-C65D",
			serviceId: "1F19-3B91-C65D",
			displayName: "Cognosys Inc. Mautic on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F26-88DA-ACC4",
			serviceId: "1F26-88DA-ACC4",
			displayName:
				"OmniSci, Inc. OmniSci Platform Enterprise Edition - P100",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F75-5D3B-D9B6",
			serviceId: "1F75-5D3B-D9B6",
			displayName:
				"Bitnami JFrog Artifactory Open Source Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F7B-001C-9BEB",
			serviceId: "1F7B-001C-9BEB",
			displayName: "Bitnami Dolibarr Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1F8C-FEBC-0765",
			serviceId: "1F8C-FEBC-0765",
			displayName: "Influxdata - DEV Cloud2 GCP Marketplace Dev",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1FA9-5893-1647",
			serviceId: "1FA9-5893-1647",
			displayName: "Fivetran Data Pipelines",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1FAC-DED1-175E",
			serviceId: "1FAC-DED1-175E",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Premium Edition - 10 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1FE5-352A-9323",
			serviceId: "1FE5-352A-9323",
			displayName: "Google Click to Deploy Ruby Stack",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1FF1-FC11-1AC7",
			serviceId: "1FF1-FC11-1AC7",
			displayName: "VMware Inc. vmware-sdwan",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/1FFD-5D9F-7D14",
			serviceId: "1FFD-5D9F-7D14",
			displayName: "Origin Protocol DShop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2024-A713-F326",
			serviceId: "2024-A713-F326",
			displayName:
				"Fortinet Inc. Fortinet FortiWeb Web Application Firewall WAF VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2028-1B43-9116",
			serviceId: "2028-1B43-9116",
			displayName: "Miri Infotech kafka",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/204E-C5D9-B176",
			serviceId: "204E-C5D9-B176",
			displayName: "Cognosys Inc. Jenkins on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2059-F45F-A52D",
			serviceId: "2059-F45F-A52D",
			displayName: "CloudBees Core",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2069-4C9D-A2F5",
			serviceId: "2069-4C9D-A2F5",
			displayName: "Pluto7 Pricing ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/206A-22FA-D734",
			serviceId: "206A-22FA-D734",
			displayName: "Transcode API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/207B-3B25-1016",
			serviceId: "207B-3B25-1016",
			displayName: "Miri Infotech Grafana",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/20AF-08BB-F4EB",
			serviceId: "20AF-08BB-F4EB",
			displayName: "Miri Infotech OpenBiblio",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/20C2-794F-490B",
			serviceId: "20C2-794F-490B",
			displayName: "Panzura Inc. Panzura Freedom NAS - GCE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/210D-F9A5-C051",
			serviceId: "210D-F9A5-C051",
			displayName: "Unravel Data Unravel for Dataproc",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2123-DACF-C407",
			serviceId: "2123-DACF-C407",
			displayName:
				"StrongBox IT Pvt Ltd Modshield SB - Web Application Firewall",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2137-59FE-81AF",
			serviceId: "2137-59FE-81AF",
			displayName: "Bitnami Openfire Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/213C-9623-1402",
			serviceId: "213C-9623-1402",
			displayName: "Places API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/2170-2565-29DF",
			serviceId: "2170-2565-29DF",
			displayName: "Flowmon Networks Flowmon for Google Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2172-CD1A-453A",
			serviceId: "2172-CD1A-453A",
			displayName: "NetApp, Inc. Cloud Manager for Cloud Volumes ONTAP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2178-2D98-59E4",
			serviceId: "2178-2D98-59E4",
			displayName:
				"Pulse Secure, LLC Traffic Manager Essential Edition - 300 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/219D-FF8C-6861",
			serviceId: "219D-FF8C-6861",
			displayName: "Loadbalancer.org Enterprise GCP BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/21BE-4D27-C9C4",
			serviceId: "21BE-4D27-C9C4",
			displayName:
				"Cognosys Inc. Apache Web Server with Ubuntu 18-04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/21DE-23B8-C28A",
			serviceId: "21DE-23B8-C28A",
			displayName: "CLOUDUP INFOTECH PRIVATE LIMITED Cloudup-ERP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2219-D3C2-A06A",
			serviceId: "2219-D3C2-A06A",
			displayName: "Vertica Analytics Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2232-FF32-1FEB",
			serviceId: "2232-FF32-1FEB",
			displayName: "Frontline Hardened Red Hat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2282-F60B-CE6D",
			serviceId: "2282-F60B-CE6D",
			displayName:
				"CIS (Center for Internet Security) CIS CentOS Linux 6 Benchmark v2.0.2 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/228A-F5DD-C602",
			serviceId: "228A-F5DD-C602",
			displayName: "NGINX, Inc NGINX Plus - Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22A0-3AED-707A",
			serviceId: "22A0-3AED-707A",
			displayName: "Citrix Systems, Inc. ADM Service Agent",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22AD-1716-F48F",
			serviceId: "22AD-1716-F48F",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BETTER  (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22AD-447C-4274",
			serviceId: "22AD-447C-4274",
			displayName: "Fluid Numerics RCC-Debian",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22B7-64BF-4C9C",
			serviceId: "22B7-64BF-4C9C",
			displayName:
				"NVIDIA Quadro Virtual Workstation - Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22C2-A2F8-3601",
			serviceId: "22C2-A2F8-3601",
			displayName: "Tempered Networks Conductor v2.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22EC-D055-264B",
			serviceId: "22EC-D055-264B",
			displayName: "Miri Infotech RubyRails",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/22F4-7CC6-4D1A",
			serviceId: "22F4-7CC6-4D1A",
			displayName:
				"Cognosys Inc. SQL Server 2014 Express on Hardened Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/233A-D9B7-58CE",
			serviceId: "233A-D9B7-58CE",
			displayName: "Human API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2379-84F2-4450",
			serviceId: "2379-84F2-4450",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse Sense Traffic Pulse and Cloud AutoML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/238F-572F-F2D2",
			serviceId: "238F-572F-F2D2",
			displayName: "Chaser Systems discrimiNAT",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2390-6FAC-BA70",
			serviceId: "2390-6FAC-BA70",
			displayName: "F5, Inc f5-big-awf-plus-payg-16vcpu",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/23A0-49DD-A730",
			serviceId: "23A0-49DD-A730",
			displayName: "Miri Infotech PIVOTX",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/23E9-7B02-460F",
			serviceId: "23E9-7B02-460F",
			displayName: "Oro Inc. OroCRM VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/23EB-EABE-11C3",
			serviceId: "23EB-EABE-11C3",
			displayName:
				"Perforce Software Inc. OpenLogic AlmaLinux 8.3-beta-1 (v20210204)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2401-8234-89C6",
			serviceId: "2401-8234-89C6",
			displayName: "Etrans Lab Shadowsocks VPN",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2458-028D-5ED0",
			serviceId: "2458-028D-5ED0",
			displayName:
				"Fortinet Inc. Fortinet FortiADC Application Delivery Controller PAYG 1Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/24B7-B9B6-2270",
			serviceId: "24B7-B9B6-2270",
			displayName:
				"Google Click to Deploy Simple pre-configured Debian VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/24E6-581D-38E5",
			serviceId: "24E6-581D-38E5",
			displayName: "BigQuery",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/251D-E8E2-38A4",
			serviceId: "251D-E8E2-38A4",
			displayName: "Cognosys Inc. MySQL 5.6 on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2524-445E-1178",
			serviceId: "2524-445E-1178",
			displayName: "Cognosys Inc. Secured MediaWiki on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2539-BF8D-81F7",
			serviceId: "2539-BF8D-81F7",
			displayName:
				"Cloud Infrastructure Services WordPress on Server 2016 + PhpMyAdmin + MySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/253F-1ADF-B066",
			serviceId: "253F-1ADF-B066",
			displayName: "MultiClusterIngress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2556-4396-15B9",
			serviceId: "2556-4396-15B9",
			displayName: "Teradata Vantage on Google Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/256F-92D0-D27D",
			serviceId: "256F-92D0-D27D",
			displayName: "Atomicorp Enterprise Ossec",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/25DB-618E-3F79",
			serviceId: "25DB-618E-3F79",
			displayName: "Cloud IDS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/25E7-0954-E177",
			serviceId: "25E7-0954-E177",
			displayName: "Cognosys Inc. Abantecart on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2633-D310-1DB7",
			serviceId: "2633-D310-1DB7",
			displayName: "Miri Infotech Xoops",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2652-9747-1793",
			serviceId: "2652-9747-1793",
			displayName:
				"Fortinet Inc. Fortinet FortiADC Application Delivery Controller PAYG 10Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2662-232A-AC11",
			serviceId: "2662-232A-AC11",
			displayName: "Firebase Hosting",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2672-E413-ACAC",
			serviceId: "2672-E413-ACAC",
			displayName:
				"DataSunrise Inc DataSunrise Database Security, Data Masking and Compliance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2683-85F8-24F3",
			serviceId: "2683-85F8-24F3",
			displayName: "Alpina Analytics Swiftflow",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2697-7C19-877E",
			serviceId: "2697-7C19-877E",
			displayName: "Google Click to Deploy Subversion",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/269F-34AC-5F7D",
			serviceId: "269F-34AC-5F7D",
			displayName: "Evidian SafeKit Mirror Cluster on CentOS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/26B7-A21A-4FAD",
			serviceId: "26B7-A21A-4FAD",
			displayName:
				"Barracuda Networks, Inc. Barracuda CloudGen WAF (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/26CA-A975-F471",
			serviceId: "26CA-A975-F471",
			displayName: "Dynamic AI Demo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/270C-F7FA-E994",
			serviceId: "270C-F7FA-E994",
			displayName: "Cognosys Inc. Nginx With Ubuntu Server 20.04 Lts",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2737-FE5D-D5AB",
			serviceId: "2737-FE5D-D5AB",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/278F-D51F-3660",
			serviceId: "278F-D51F-3660",
			displayName: "Solo.io gloo-enterprise-subscription",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/27A6-BEA7-CB50",
			serviceId: "27A6-BEA7-CB50",
			displayName: "Redis Labs DEV Redis Enterprise Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/27AE-4CA9-1FB5",
			serviceId: "27AE-4CA9-1FB5",
			displayName: "Bitnami Tiny Tiny RSS Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/27CB-5FE3-02DF",
			serviceId: "27CB-5FE3-02DF",
			displayName: "Bitnami MariaDB Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/280B-F53E-B8DB",
			serviceId: "280B-F53E-B8DB",
			displayName: "Cognosys Inc. MariaDB 10 With CentOS 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2852-5DD1-BBD6",
			serviceId: "2852-5DD1-BBD6",
			displayName: "Oro Inc. OroCommerce VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2855-49F0-89D5",
			serviceId: "2855-49F0-89D5",
			displayName: "CARTODB Inc. CARTO Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/285E-7B4D-F721",
			serviceId: "285E-7B4D-F721",
			displayName: "ResIOT OPEN GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2864-C1BF-1429",
			serviceId: "2864-C1BF-1429",
			displayName: "Citrix Systems, Inc. Citrix ADC VPX Express - 20Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2872-9FA7-9E8C",
			serviceId: "2872-9FA7-9E8C",
			displayName:
				"Check Point Software Technologies Check Point CloudGuard IaaS Security Autoscaling (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2874-4E6C-E59E",
			serviceId: "2874-4E6C-E59E",
			displayName:
				"Perforce Software Inc. OpenLogic AlmaLinux 8.3 (v20210330)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2892-9568-77CC",
			serviceId: "2892-9568-77CC",
			displayName: "Miri Infotech IliasLMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/28D5-7954-0B74",
			serviceId: "28D5-7954-0B74",
			displayName:
				"Plesk on Ubuntu - BYOL - Website & WordPress Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/28D7-5455-635F",
			serviceId: "28D7-5455-635F",
			displayName: "Cognosys Inc. Mautic on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/28EA-68CA-3E1A",
			serviceId: "28EA-68CA-3E1A",
			displayName: "Google Click to Deploy LAPP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/291F-5871-F804",
			serviceId: "291F-5871-F804",
			displayName: "Cognosys Inc. Haproxy on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/297B-F000-7557",
			serviceId: "297B-F000-7557",
			displayName: "NVIDIA Quadro Virtual Workstation - Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/29A0-EDAC-4862",
			serviceId: "29A0-EDAC-4862",
			displayName:
				"Google Click to Deploy Hyperledger Fabric and Composer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/29C1-832D-92FE",
			serviceId: "29C1-832D-92FE",
			displayName: "Aerospike Enterprise Edition with ACMv5",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/29C8-2050-2424",
			serviceId: "29C8-2050-2424",
			displayName: "Genomics",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/29E7-DA93-CA13",
			serviceId: "29E7-DA93-CA13",
			displayName: "Cloud Functions",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2A06-2FFD-D8DC",
			serviceId: "2A06-2FFD-D8DC",
			displayName:
				"DataStax Distribution of Apache Cassandra 24x7 Support",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2A1A-142F-94CB",
			serviceId: "2A1A-142F-94CB",
			displayName: "Cognosys Inc. Node.js on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2A27-8988-64B8",
			serviceId: "2A27-8988-64B8",
			displayName: "Managed Service for Microsoft Active Directory",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2A50-F3DA-21A7",
			serviceId: "2A50-F3DA-21A7",
			displayName: "LABS.AI E.D.D.I - Open Source Chatbot Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2A64-92E4-6871",
			serviceId: "2A64-92E4-6871",
			displayName:
				"Cognosys Inc. Secured Piwigo Gallery on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2AD3-68EC-5236",
			serviceId: "2AD3-68EC-5236",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2AF2-C71B-98BC",
			serviceId: "2AF2-C71B-98BC",
			displayName: "Bricks Software Unleash-enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2B3B-023C-2F8F",
			serviceId: "2B3B-023C-2F8F",
			displayName:
				"InfluxData, the creators of InfluxDB InfluxDB Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2B4F-0A3F-37C9",
			serviceId: "2B4F-0A3F-37C9",
			displayName: "Cognosys Inc. Joomla With Ubuntu Server 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2B5C-ED7A-1A76",
			serviceId: "2B5C-ED7A-1A76",
			displayName: "Dell EMC Power Protect DD Management Center",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2B6A-4AB1-18B8",
			serviceId: "2B6A-4AB1-18B8",
			displayName: "Bitnami MariaDB with Replication",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2B86-1880-5789",
			serviceId: "2B86-1880-5789",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 20.04 LTS Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2BAB-AA10-2D98",
			serviceId: "2BAB-AA10-2D98",
			displayName: "Cognosys Inc. Secured phpBB on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2BCF-F8B8-7A17",
			serviceId: "2BCF-F8B8-7A17",
			displayName:
				"Thoughtspot Inc ThoughtSpot Search & AI-driven Analytics (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2C3C-19A2-6493",
			serviceId: "2C3C-19A2-6493",
			displayName:
				"ScaiData ScaiPlatform - Free Real-Time Business Intelligence & Analytics",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2C40-ECFA-CF91",
			serviceId: "2C40-ECFA-CF91",
			displayName: "EnterpriseDB EDB Postgres Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2C5D-01E7-6B5B",
			serviceId: "2C5D-01E7-6B5B",
			displayName: "Dicom Systems Unifier Enterprise Imaging Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2C9B-CCA6-48C2",
			serviceId: "2C9B-CCA6-48C2",
			displayName: "Miri Infotech Dolibarr",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2CB9-6424-314A",
			serviceId: "2CB9-6424-314A",
			displayName:
				"Teradici Cloud Access Software-Graphics for Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2CCC-0870-9405",
			serviceId: "2CCC-0870-9405",
			displayName: "Google Click to Deploy DokuWiki",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2D30-29F4-BA40",
			serviceId: "2D30-29F4-BA40",
			displayName: "Google Click to Deploy Jenkins",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2D73-657F-C343",
			serviceId: "2D73-657F-C343",
			displayName: "Google Click to Deploy Nginx",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2DD4-A2EB-B906",
			serviceId: "2DD4-A2EB-B906",
			displayName:
				"FlashGrid Inc. RHEL 7 Image for FlashGrid SkyCluster with Oracle RAC",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2E1B-23BA-2D14",
			serviceId: "2E1B-23BA-2D14",
			displayName: "Couchbase Sync Gateway",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2E66-FA31-A0AB",
			serviceId: "2E66-FA31-A0AB",
			displayName: "Miri Infotech Zencart",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2E6C-5FE3-D0D2",
			serviceId: "2E6C-5FE3-D0D2",
			displayName: "MariaDB SkySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2E8A-C97C-C946",
			serviceId: "2E8A-C97C-C946",
			displayName: "H2O.ai Driverless AI (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2EC9-6E36-8614",
			serviceId: "2EC9-6E36-8614",
			displayName: "Bell Integrator Neuton",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2ECC-231D-63E6",
			serviceId: "2ECC-231D-63E6",
			displayName:
				"Juniper Networks Inc. vsrx Next Generation Firewall-BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2ED5-DE13-2295",
			serviceId: "2ED5-DE13-2295",
			displayName:
				"Cloud Infrastructure Services Redis Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2EE0-C60B-AC2D",
			serviceId: "2EE0-C60B-AC2D",
			displayName:
				"CIS (Center for Internet Security) CIS Debian Linux 9 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2EED-EE52-0BE2",
			serviceId: "2EED-EE52-0BE2",
			displayName: "cds-demo-2 CDS Test 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2F03-0ADD-D7CE",
			serviceId: "2F03-0ADD-D7CE",
			displayName: "Bitnami Pimcore Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2F16-616C-6696",
			serviceId: "2F16-616C-6696",
			displayName: "Twinword Inc. Language Scoring API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2F4F-E8BA-6DBE",
			serviceId: "2F4F-E8BA-6DBE",
			displayName:
				"Couchbase Server and Sync Gateway (Hourly and Test Drive)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2FC7-259B-47C8",
			serviceId: "2FC7-259B-47C8",
			displayName:
				"Cloud Infrastructure Services Ansible Control Node Server on CentOS Server 8.4",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/2FEA-DF04-685C",
			serviceId: "2FEA-DF04-685C",
			displayName:
				"Google Cloud Platform Financial Services team Datashare",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3026-2FCF-11A2",
			serviceId: "3026-2FCF-11A2",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX - Customer Licensed",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/302A-D56C-8C0C",
			serviceId: "302A-D56C-8C0C",
			displayName: "Safe Software FME Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/30B5-8919-D869",
			serviceId: "30B5-8919-D869",
			displayName:
				"Google Click to Deploy MariaDB Cluster (with replication)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/30D7-9CCE-CC0B",
			serviceId: "30D7-9CCE-CC0B",
			displayName:
				"CLOUDUP INFOTECH PRIVATE LIMITED Cloudup Joomla  on Debian 9",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/30DD-FBBD-FC49",
			serviceId: "30DD-FBBD-FC49",
			displayName: "F5 Networks F5 Advanced WAF  (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/30E6-725A-DDFF",
			serviceId: "30E6-725A-DDFF",
			displayName: "Cognosys Inc. Lamp With RedHat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3100-DC74-AA0A",
			serviceId: "3100-DC74-AA0A",
			displayName: "Qumulo 5TB Hybrid Qumulo File System Instance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/312C-0CA8-9AD4",
			serviceId: "312C-0CA8-9AD4",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 8.3 (v20201214)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3143-A712-DB14",
			serviceId: "3143-A712-DB14",
			displayName: "Google Click to Deploy ASP.NET Framework",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/314C-C61D-05F5",
			serviceId: "314C-C61D-05F5",
			displayName: "Pumpkin DB pumpkin-saas-legacy",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/318A-1B95-C718",
			serviceId: "318A-1B95-C718",
			displayName: "Miri Infotech Wildfly",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/318F-06D8-86E5",
			serviceId: "318F-06D8-86E5",
			displayName: "Bitnami etcd Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3197-F51E-A5C6",
			serviceId: "3197-F51E-A5C6",
			displayName:
				"Cognosys Inc. SQL Server Enterprise on Linux-SQL Server 2017 on SUSE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/31CC-3BCA-0225",
			serviceId: "31CC-3BCA-0225",
			displayName: "NGINX, Inc NGINX Plus Developer - CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/31F9-EB7E-D488",
			serviceId: "31F9-EB7E-D488",
			displayName: "F5 Networks F5 Advanced WAF  (PAYG, 1Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3203-AAF8-7D6F",
			serviceId: "3203-AAF8-7D6F",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse Sense Traffic Pulse On-Demand Intelligent Video Analytics",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/321A-6E94-D996",
			serviceId: "321A-6E94-D996",
			displayName: "Miri Infotech Limesurvey",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3225-23F0-4062",
			serviceId: "3225-23F0-4062",
			displayName:
				"Cloud Infrastructure Services Weka Machine Learning on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3272-46BE-0A16",
			serviceId: "3272-46BE-0A16",
			displayName: "OmniSci, Inc. OmniSci Open Source Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3281-85BA-FBC7",
			serviceId: "3281-85BA-FBC7",
			displayName: "NGINX, Inc NGINX Plus - CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/32FA-7E02-F2CF",
			serviceId: "32FA-7E02-F2CF",
			displayName: "Google Click to Deploy Mautic",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3320-AA4D-A76B",
			serviceId: "3320-AA4D-A76B",
			displayName:
				"Cognosys Inc. Secured Sharepoint 2016 Standard on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3329-665A-98D1",
			serviceId: "3329-665A-98D1",
			displayName:
				"Cognosys Inc. SQL Server Web 2017 on Linux - Ubuntu 16.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3332-5F27-A239",
			serviceId: "3332-5F27-A239",
			displayName: "ANALOG INNOVATION PVT LTD Secured Bitcoin Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3377-D1B3-F030",
			serviceId: "3377-D1B3-F030",
			displayName: "Cognosys Inc. Secured HeidiSQL on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3382-87F8-BDD6",
			serviceId: "3382-87F8-BDD6",
			displayName: "Zype",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/33A8-1F13-1F5F",
			serviceId: "33A8-1F13-1F5F",
			displayName: "Bitnami Horde Groupware Webmail Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/33C3-2389-DD71",
			serviceId: "33C3-2389-DD71",
			displayName:
				"Veritas Technologies Veritas NetBackup CloudPoint 9.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3465-A68C-BFDD",
			serviceId: "3465-A68C-BFDD",
			displayName: "CubeBackup Inc. CubeBackup for Windows",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/346B-760B-8234",
			serviceId: "346B-760B-8234",
			displayName:
				"Cloud Infrastructure Services Reverse Proxy Server using NGINX on Ubuntu",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3476-7A9B-4BB2",
			serviceId: "3476-7A9B-4BB2",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Advanced Edition - 5 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/347E-F249-649F",
			serviceId: "347E-F249-649F",
			displayName: "Alcide",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3489-9D82-BA1F",
			serviceId: "3489-9D82-BA1F",
			displayName: "Bitnami GitLab CE Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/34DF-6AD6-E396",
			serviceId: "34DF-6AD6-E396",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3532-3451-41DD",
			serviceId: "3532-3451-41DD",
			displayName:
				"Cloud Infrastructure Services Docker Engine Community on Ubuntu 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3599-802B-7B7D",
			serviceId: "3599-802B-7B7D",
			displayName: "Genymotion Cloud: Android 8.0 (oreo)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/35A1-F5B2-64AC",
			serviceId: "35A1-F5B2-64AC",
			displayName: "CompilerWorks",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/35D1-EA12-99B4",
			serviceId: "35D1-EA12-99B4",
			displayName:
				"Cloud Infrastructure Services Node.js Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/35E1-DAB0-927C",
			serviceId: "35E1-DAB0-927C",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2012 R2 Benchmark - Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/35E5-EB7C-B747",
			serviceId: "35E5-EB7C-B747",
			displayName:
				"Atomicorp AtomicWP Cloud Workload Security for Docker",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3613-F1BA-9762",
			serviceId: "3613-F1BA-9762",
			displayName:
				"InterSystems Corporation InterSystems IRIS Community Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3632-5D86-7896",
			serviceId: "3632-5D86-7896",
			displayName: "Pluto7 Sentiment ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/363B-8851-170D",
			serviceId: "363B-8851-170D",
			displayName: "Dataproc",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3645-6872-9A9F",
			serviceId: "3645-6872-9A9F",
			displayName: "ThingsBoard, Inc. ThingsBoard Professional Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3652-B451-3BAD",
			serviceId: "3652-B451-3BAD",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/365A-E1E3-A68D",
			serviceId: "365A-E1E3-A68D",
			displayName: "Etrans Lab WordPress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3662-F860-6F1E",
			serviceId: "3662-F860-6F1E",
			displayName: "Absolut-e Data Com Inc. BizStats AI",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3679-7487-549C",
			serviceId: "3679-7487-549C",
			displayName: "Roads API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/369D-5BAF-15B5",
			serviceId: "369D-5BAF-15B5",
			displayName: "Bitnami LAMP Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/36A9-155B-23F0",
			serviceId: "36A9-155B-23F0",
			displayName: "API Gateway",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/36FE-7730-35F0",
			serviceId: "36FE-7730-35F0",
			displayName: "Frontline Hardened Ubuntu 18",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3713-C0CF-F8B1",
			serviceId: "3713-C0CF-F8B1",
			displayName: "JFrog Enterprise+ (Complete DevOps Platform)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/374C-DECC-02EE",
			serviceId: "374C-DECC-02EE",
			displayName:
				"Prime Strategy Co.,Ltd. KUSANAGI for GCP Business Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/374E-72FC-1CD7",
			serviceId: "374E-72FC-1CD7",
			displayName: "CompilerWorks compilerworks-vm deployment",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3766-36FA-EC25",
			serviceId: "3766-36FA-EC25",
			displayName: "Google Click to Deploy CDAP OSS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/376F-19D2-9B33",
			serviceId: "376F-19D2-9B33",
			displayName: "Microfusion Technology Co., Ltd AmigoCDN",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3770-CA6C-C2CC",
			serviceId: "3770-CA6C-C2CC",
			displayName: "Bitnami CouchDB Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3785-C506-2C71",
			serviceId: "3785-C506-2C71",
			displayName: "Twinword Inc. Text Similarity API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/37C5-5E37-E1FD",
			serviceId: "37C5-5E37-E1FD",
			displayName: "FileCatalyst Direct BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3819-1239-10F2",
			serviceId: "3819-1239-10F2",
			displayName: "Prodoscore",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/383C-822E-1651",
			serviceId: "383C-822E-1651",
			displayName:
				"Cognosys Inc. SQL Server Standard 2017 on Linux - Ubuntu 16.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/385F-6611-B8E1",
			serviceId: "385F-6611-B8E1",
			displayName: "CloudyCluster by Omnibond CloudyCluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3899-9D87-394F",
			serviceId: "3899-9D87-394F",
			displayName:
				"Cognosys Inc. Node.js, .Net & PHP on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/389C-63C8-763B",
			serviceId: "389C-63C8-763B",
			displayName:
				"Rill Data, Inc Rill Data - Fully Managed Cloud Service for Apache Druid",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/38CD-7167-BB31",
			serviceId: "38CD-7167-BB31",
			displayName: "Miri Infotech MANTIS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/38D6-709D-9035",
			serviceId: "38D6-709D-9035",
			displayName: "Techila Distributed Computing",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/38F3-2781-C94A",
			serviceId: "38F3-2781-C94A",
			displayName: "Bitnami Roller",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3915-A454-9E9F",
			serviceId: "3915-A454-9E9F",
			displayName: "Miri Infotech BACKDROP CMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/391E-94C0-AD8B",
			serviceId: "391E-94C0-AD8B",
			displayName:
				"Cognosys Inc. Visual Studio Enterprise 2015 on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/397C-4EF0-B6D5",
			serviceId: "397C-4EF0-B6D5",
			displayName: "Cognosys Inc. Wordpress With CentOS 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3986-8652-1EE5",
			serviceId: "3986-8652-1EE5",
			displayName:
				"Searce Cosourcing Services Private Limited happierWork",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/39CF-B2C7-B39B",
			serviceId: "39CF-B2C7-B39B",
			displayName: "Bitnami Matomo Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3A1B-66C4-2BAE",
			serviceId: "3A1B-66C4-2BAE",
			displayName: "Pub/Sub Lite",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3A4F-889D-4358",
			serviceId: "3A4F-889D-4358",
			displayName:
				"Barracuda Networks, Inc. Barracuda CloudGen Control Center",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3A5F-2184-34C4",
			serviceId: "3A5F-2184-34C4",
			displayName:
				"Cloud Infrastructure Services Apache Tomcat Server on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3A6E-6254-84F7",
			serviceId: "3A6E-6254-84F7",
			displayName:
				"Techlatest.net Python Django and Flask developer suit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3A97-2B2F-4BCF",
			serviceId: "3A97-2B2F-4BCF",
			displayName: "SPRINGML INC NVIDIA Clara Train SDK on Google Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3AC0-080A-7AE4",
			serviceId: "3AC0-080A-7AE4",
			displayName:
				"Cognosys Inc. SecuredSharepoint2016 Enterprise on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3AD0-854D-6328",
			serviceId: "3AD0-854D-6328",
			displayName: "WitFoo, Inc. witfoo-precinct-byol",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3AEB-2238-6EBB",
			serviceId: "3AEB-2238-6EBB",
			displayName: "PlanetScale Inc. PlanetScaleDB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3AF2-6C62-2180",
			serviceId: "3AF2-6C62-2180",
			displayName: "Evidian SafeKit Mirror Cluster on Windows",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3AFC-B84F-8D20",
			serviceId: "3AFC-B84F-8D20",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse Sense Traffic Pulse and AutoML Video Intelligence",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B09-28C6-811B",
			serviceId: "3B09-28C6-811B",
			displayName: "IBM Aspera Aspera on Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B13-68C5-D78D",
			serviceId: "3B13-68C5-D78D",
			displayName: "MongoDB Inc. MongoDB Atlas",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B57-AA24-BD14",
			serviceId: "3B57-AA24-BD14",
			displayName:
				"CIS (Center for Internet Security) CIS SUSE Linux Enterprise Server 11 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B6F-D925-520E",
			serviceId: "3B6F-D925-520E",
			displayName:
				"Veeam Software Veeam Backup for Google Cloud Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B71-3F45-CF28",
			serviceId: "3B71-3F45-CF28",
			displayName: "Pluto7 Supply ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B92-CF6C-1603",
			serviceId: "3B92-CF6C-1603",
			displayName: "Jetware Optimized LEMP Stack PHP 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3B97-EF29-7DF0",
			serviceId: "3B97-EF29-7DF0",
			displayName: "Maven Wave Partners LLC Datasim",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3BA6-A219-F3D0",
			serviceId: "3BA6-A219-F3D0",
			displayName: "Z-Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3BC5-17B3-3834",
			serviceId: "3BC5-17B3-3834",
			displayName:
				"Cognosys Inc. SQL Server 2017 Express on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3BE5-FBA4-1B83",
			serviceId: "3BE5-FBA4-1B83",
			displayName: "Application Integration",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3C02-AF97-2288",
			serviceId: "3C02-AF97-2288",
			displayName: "AppViewX Inc AppViewX-CLM-v2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3C05-E81F-652C",
			serviceId: "3C05-E81F-652C",
			displayName: "Cognosys Inc. Django on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3C1E-9C4C-C482",
			serviceId: "3C1E-9C4C-C482",
			displayName:
				"Oncore Cloud Services Inc. Oncore!DOCS, Powered by Nextcloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3C29-F0F9-87C0",
			serviceId: "3C29-F0F9-87C0",
			displayName:
				"Aqua Security Software Inc. Aqua Cloud Native Security Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3C7A-53A6-9F02",
			serviceId: "3C7A-53A6-9F02",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 7 Benchmark v2.1.1 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3CEF-4445-C395",
			serviceId: "3CEF-4445-C395",
			displayName: "Jetware AISE PyTorch NVidia GPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3CF3-868F-55CF",
			serviceId: "3CF3-868F-55CF",
			displayName: "Fluid Numerics CFD-GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3D57-32A3-4B3D",
			serviceId: "3D57-32A3-4B3D",
			displayName: "F5 Networks F5 Advanced WAF (PAYG, 16vCPU)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3D69-DDBE-870C",
			serviceId: "3D69-DDBE-870C",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 7.9 (v20201124)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3D6D-5232-9B28",
			serviceId: "3D6D-5232-9B28",
			displayName: "Striim Inc. SMSGC (BiDirectional)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3D8D-40F8-D932",
			serviceId: "3D8D-40F8-D932",
			displayName:
				"NGINX, Inc NGINX Plus with NGINX App Protect - Premium (Ubuntu 18.04)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DA5-0DA1-FF9B",
			serviceId: "3DA5-0DA1-FF9B",
			displayName: "Miri Infotech ghost",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DAD-299B-0D94",
			serviceId: "3DAD-299B-0D94",
			displayName: "Backup and DR Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DAD-B96D-BE09",
			serviceId: "3DAD-B96D-BE09",
			displayName: "Anthos Service Mesh",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DC9-F70D-E342",
			serviceId: "3DC9-F70D-E342",
			displayName: "Kasten K10",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DD4-CF86-6A20",
			serviceId: "3DD4-CF86-6A20",
			displayName: "Etrans Lab Eyeblue Cloud Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DEE-5B87-9006",
			serviceId: "3DEE-5B87-9006",
			displayName: "Veritas Technologies Veritas NetBackup",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DF4-C6C6-8693",
			serviceId: "3DF4-C6C6-8693",
			displayName: "StreamSets Inc StreamSets Data Collector",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3DF6-D30F-D298",
			serviceId: "3DF6-D30F-D298",
			displayName: "Grakn Labs Grakn KGMS - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E06-1A06-A6A0",
			serviceId: "3E06-1A06-A6A0",
			displayName:
				"CIS (Center for Internet Security) CIS SUSE Linux Enterprise Server 12 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E0D-29BD-8558",
			serviceId: "3E0D-29BD-8558",
			displayName: "Matillion ETL for Snowflake",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E18-D392-EB4B",
			serviceId: "3E18-D392-EB4B",
			displayName:
				"Cloud Infrastructure Services Apache Cassandra Cluster on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E23-BCDA-E488",
			serviceId: "3E23-BCDA-E488",
			displayName: "Cognosys Inc. Jenkins on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E65-A14D-E29F",
			serviceId: "3E65-A14D-E29F",
			displayName: "Firebase Auth",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E75-81AB-455A",
			serviceId: "3E75-81AB-455A",
			displayName: "NVIDIA nvidia-cloudxr-windows-server-2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3E96-D66A-E61C",
			serviceId: "3E96-D66A-E61C",
			displayName: "Bitnami Tiki Wiki CMS Groupware Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3EC3-D648-6149",
			serviceId: "3EC3-D648-6149",
			displayName: "CloudBees Accelerator",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3EDE-C677-FFF7",
			serviceId: "3EDE-C677-FFF7",
			displayName:
				"Check Point Software Technologies Check Point CloudGuard IaaS High Availability (PAYG)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3F0D-AED6-1E33",
			serviceId: "3F0D-AED6-1E33",
			displayName:
				"Silver Peak Network Silver Peak Unity Orchestrator - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3F14-BBC8-29BD",
			serviceId: "3F14-BBC8-29BD",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3F7D-6DF5-9FEA",
			serviceId: "3F7D-6DF5-9FEA",
			displayName: "Cognosys Inc.  Secured Postgresql on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3F95-DF13-A2A5",
			serviceId: "3F95-DF13-A2A5",
			displayName:
				"Denodo Technologies Inc. denodo-platform-80-vdp-payg-sa-lnx",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3FA1-C3F5-E701",
			serviceId: "3FA1-C3F5-E701",
			displayName:
				"SQL FCI SQL Server 2016 AlwaysOn Failover Cluster Instance (Beta)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3FB4-B70B-0252",
			serviceId: "3FB4-B70B-0252",
			displayName: "JFrog jfrog-pro-team-saas",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3FE2-BB4E-CED4",
			serviceId: "3FE2-BB4E-CED4",
			displayName: "Bitnami SugarCRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/3FEF-8B4B-6146",
			serviceId: "3FEF-8B4B-6146",
			displayName: "Databricks (dev)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4089-A91B-B72C",
			serviceId: "4089-A91B-B72C",
			displayName: "Striim Inc. Striim for Google Database Migration",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/40CE-9169-6DA6",
			serviceId: "40CE-9169-6DA6",
			displayName: "Cognosys Inc. NGINX With CentOS 7-7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/40F3-89AA-983F",
			serviceId: "40F3-89AA-983F",
			displayName:
				"Cloud Infrastructure Services Docker Engine Community on CentOS 8.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/413D-88D9-5C4E",
			serviceId: "413D-88D9-5C4E",
			displayName: "Cognosys Inc. Docker CE With Centos 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/414C-A0E2-DB63",
			serviceId: "414C-A0E2-DB63",
			displayName: "Atos - Dev Identity as a Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4166-7588-63FC",
			serviceId: "4166-7588-63FC",
			displayName: "Frontline Hardened Debian 10",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/416E-3D72-AFFB",
			serviceId: "416E-3D72-AFFB",
			displayName: "Miri Infotech instant",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/418F-BB2F-1D34",
			serviceId: "418F-BB2F-1D34",
			displayName: "Qualys, Inc. Qualys Virtual Scanner Appliance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/41DA-1FFA-98FF",
			serviceId: "41DA-1FFA-98FF",
			displayName: "Aqua Security Software Inc. aqua-security-payg",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/41E8-979C-C33A",
			serviceId: "41E8-979C-C33A",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4230-B23B-D4F1",
			serviceId: "4230-B23B-D4F1",
			displayName:
				"Cloud Infrastructure Services IP PBX using FreePBX Solution on Ubuntu (VoIP)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4252-F221-8339",
			serviceId: "4252-F221-8339",
			displayName: "Document Warehouse",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4291-7B20-3ABB",
			serviceId: "4291-7B20-3ABB",
			displayName:
				"IBM Security QRadar Security Intelligence Platform App Host v7.3.2 P1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/42BE-D2BF-F64F",
			serviceId: "42BE-D2BF-F64F",
			displayName: "Zync",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/42BF-9E52-C353",
			serviceId: "42BF-9E52-C353",
			displayName: "NVIDIA Gaming PC - Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/42C7-D3D4-DAFC",
			serviceId: "42C7-D3D4-DAFC",
			displayName: "Bitnami Drupal Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/42EC-B246-4DFF",
			serviceId: "42EC-B246-4DFF",
			displayName:
				"Cognosys Inc. Apache Web Server with Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4314-52BD-45A2",
			serviceId: "4314-52BD-45A2",
			displayName: "Cognosys Inc. Secured Bugzilla on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4360-24FD-4AF5",
			serviceId: "4360-24FD-4AF5",
			displayName: "Techlatest.net desktop-linux-centos",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/43A1-A9F8-BBC1",
			serviceId: "43A1-A9F8-BBC1",
			displayName:
				"Cognosys Inc. SQL Server Web 2017 on Linux - Redhat 7.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/43CD-C804-82C7",
			serviceId: "43CD-C804-82C7",
			displayName: "Bitnami JRuby Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4408-3F34-DA51",
			serviceId: "4408-3F34-DA51",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Premium Edition - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4424-E3CF-5E09",
			serviceId: "4424-E3CF-5E09",
			displayName:
				"DataStax Apache Cassandra for GCP supported by DataStax",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4437-AF74-B567",
			serviceId: "4437-AF74-B567",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Advanced Edition - 3 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/446A-CA88-1AB7",
			serviceId: "446A-CA88-1AB7",
			displayName: "Miri Infotech Weberp",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4482-1174-7AA2",
			serviceId: "4482-1174-7AA2",
			displayName: "Aiven for PostgreSQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4490-6188-E13C",
			serviceId: "4490-6188-E13C",
			displayName:
				"Cognosys Inc. Secured SQL Server 2016 Enterprise on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/44A5-F054-C4BD",
			serviceId: "44A5-F054-C4BD",
			displayName: "Corezoid Process Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/44A9-6770-9247",
			serviceId: "44A9-6770-9247",
			displayName: "Bitnami HashiCorp Consul Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/44BC-E53F-C50E",
			serviceId: "44BC-E53F-C50E",
			displayName: "Confluent Cloud for Apache Kafka",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/44CB-146C-90FB",
			serviceId: "44CB-146C-90FB",
			displayName:
				"Cloud Infrastructure Services GitLab Server (CE) Community Edition on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4550-691F-6425",
			serviceId: "4550-691F-6425",
			displayName: "Custom Search",
			businessEntityName: "",
		},
		{
			name: "services/4566-601F-7787",
			serviceId: "4566-601F-7787",
			displayName: "Google Click to Deploy Dolibarr",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/461A-6B97-2B0C",
			serviceId: "461A-6B97-2B0C",
			displayName:
				"Silk technologies Inc. Silk Data Platform - 6 compute nodes",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4639-9F57-5C3D",
			serviceId: "4639-9F57-5C3D",
			displayName:
				"Cognosys Inc. Internet Information Server with Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4644-091A-AA6D",
			serviceId: "4644-091A-AA6D",
			displayName: "Banyan Access Tier",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4660-B24B-A53B",
			serviceId: "4660-B24B-A53B",
			displayName: "Cognosys Inc. Django on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/46AE-CC50-E00E",
			serviceId: "46AE-CC50-E00E",
			displayName:
				"Barracuda Networks, Inc. Barracuda CloudGen WAF (PAYG)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/46C3-FE9C-2926",
			serviceId: "46C3-FE9C-2926",
			displayName: "Techlatest.net javascript-developer-kit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/46C4-2A5F-0579",
			serviceId: "46C4-2A5F-0579",
			displayName:
				"Cloud Infrastructure Services WordPress on Server 2019 + PhpMyAdmin + MySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/46C7-987B-9FAC",
			serviceId: "46C7-987B-9FAC",
			displayName: "netapp.com NetApp Cloud Volumes API (Dev)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/46C7-B8CB-DDAA",
			serviceId: "46C7-B8CB-DDAA",
			displayName: "Elastifile Cloud File System",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/46E4-D5BA-BCEA",
			serviceId: "46E4-D5BA-BCEA",
			displayName: "Techlatest.net debian-gui-linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4703-1E93-F241",
			serviceId: "4703-1E93-F241",
			displayName: "LumApps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4716-FC59-E926",
			serviceId: "4716-FC59-E926",
			displayName:
				"Cloud Infrastructure Services hMail Mail Server Windows 2016 (IMAP, SMTP, POP3)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4742-5D99-A73B",
			serviceId: "4742-5D99-A73B",
			displayName: "Techlatest.net Desktop Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/47A3-9108-559A",
			serviceId: "47A3-9108-559A",
			displayName: "ANALOG INNOVATION PVT LTD jitsi",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/47AE-F82D-1F61",
			serviceId: "47AE-F82D-1F61",
			displayName: "Loadbalancer.org Enterprise GCP R20",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/47C2-D59C-2006",
			serviceId: "47C2-D59C-2006",
			displayName: "Cognosys Inc. Secured Joomla on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4801-2221-E5BF",
			serviceId: "4801-2221-E5BF",
			displayName: "Test migrated products saas-test",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4829-EDC9-24E7",
			serviceId: "4829-EDC9-24E7",
			displayName: "Partner Demo Test thiagolacerda-subs-test",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4877-2FCF-6D92",
			serviceId: "4877-2FCF-6D92",
			displayName: "Bitnami ELK Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4895-550E-D14E",
			serviceId: "4895-550E-D14E",
			displayName:
				"Cloud Infrastructure Services Terraform on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4898-56E6-BF9F",
			serviceId: "4898-56E6-BF9F",
			displayName: "gbick-vm-price-ingestion-test-free-1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4898-7F3B-F8BB",
			serviceId: "4898-7F3B-F8BB",
			displayName: "AXI AI SAP EasyConnect",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/48A8-5F68-7AC3",
			serviceId: "48A8-5F68-7AC3",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2016 Benchmark - Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/48AF-C246-A6B6",
			serviceId: "48AF-C246-A6B6",
			displayName: "Google Click to Deploy Kong",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/48DA-485B-58AE",
			serviceId: "48DA-485B-58AE",
			displayName: "Cloud Media Translation API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/48DE-82D8-64BC",
			serviceId: "48DE-82D8-64BC",
			displayName: "Striim Inc. STRIIM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4910-4B6E-2FB1",
			serviceId: "4910-4B6E-2FB1",
			displayName: "Reblaze Technologies Reblaze",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/49A4-06D7-2505",
			serviceId: "49A4-06D7-2505",
			displayName:
				"Cognosys Inc. SQL Server 2014 Express on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/49BA-D8AD-D705",
			serviceId: "49BA-D8AD-D705",
			displayName: "Cognosys Inc. CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/49CF-0570-7CED",
			serviceId: "49CF-0570-7CED",
			displayName: "Tecknolab DBcloudbin for SQLServer Pay-As-You-Go",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4A04-E266-EA27",
			serviceId: "4A04-E266-EA27",
			displayName: "Pixit Media PixStor Cloud Solo - 100 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4A20-C52F-7029",
			serviceId: "4A20-C52F-7029",
			displayName:
				"Denodo Technologies Inc. Denodo Platform 7.0 Free Trial Bring Your Own License on Windows",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4A40-16E8-DE2D",
			serviceId: "4A40-16E8-DE2D",
			displayName: "Actifio GO",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4A49-43DC-15FF",
			serviceId: "4A49-43DC-15FF",
			displayName: "Cognosys Inc. Trac on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4A57-7492-0338",
			serviceId: "4A57-7492-0338",
			displayName:
				"Cognosys Inc. Secured Acquia Drupal 7 on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4A95-1928-A345",
			serviceId: "4A95-1928-A345",
			displayName: "Miri Infotech Symfony",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4AAE-E33E-51B2",
			serviceId: "4AAE-E33E-51B2",
			displayName: "Bitnami Subversion Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4B00-C372-799F",
			serviceId: "4B00-C372-799F",
			displayName: "Miri Infotech EspoCRM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4B50-4AC3-36D5",
			serviceId: "4B50-4AC3-36D5",
			displayName:
				"Citrix Systems, Inc. Citrix Web App Firewall (WAF) - 1000 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4B88-C7A7-2E7B",
			serviceId: "4B88-C7A7-2E7B",
			displayName:
				"Cognosys Inc. SQL Server 2017 Web on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4BA4-ECF6-EB88",
			serviceId: "4BA4-ECF6-EB88",
			displayName: "Miri Infotech CMSimple",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4BA9-A769-5A75",
			serviceId: "4BA9-A769-5A75",
			displayName: "Etrans Lab crater",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4BC3-229E-AB3F",
			serviceId: "4BC3-229E-AB3F",
			displayName: "AtScale Inc AtScale Adaptive Analytics",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4BED-D4B2-0923",
			serviceId: "4BED-D4B2-0923",
			displayName: "Neo4j, Inc. Neo4j AuraDB Professional",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4C17-C0EE-31DE",
			serviceId: "4C17-C0EE-31DE",
			displayName: "Cognosys Inc. Secured Inkscape on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4C1F-807E-603E",
			serviceId: "4C1F-807E-603E",
			displayName: "Cohesity Backup as a Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4C26-E4B5-FDA9",
			serviceId: "4C26-E4B5-FDA9",
			displayName: "Google Click to Deploy Grafana",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4C32-E553-F681",
			serviceId: "4C32-E553-F681",
			displayName: "Palo Alto Networks, Inc. Cortex XSOAR",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4C45-EAEC-F374",
			serviceId: "4C45-EAEC-F374",
			displayName: "Miri Infotech Qloapps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4C5B-68DC-5D85",
			serviceId: "4C5B-68DC-5D85",
			displayName:
				"Striim Inc. Real-Time Integration to Cloud SQL for MySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4CCE-C0C3-93D1",
			serviceId: "4CCE-C0C3-93D1",
			displayName: "JFrog Cloud Pro X",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4CD4-2F2E-649E",
			serviceId: "4CD4-2F2E-649E",
			displayName: "Transcoder API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4CD9-B546-8D9E",
			serviceId: "4CD9-B546-8D9E",
			displayName:
				"Cognosys Inc. SQL Server Enterprise 2017 on Linux - Ubuntu 16.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D05-8EED-8F23",
			serviceId: "4D05-8EED-8F23",
			displayName: "Miri Infotech firebird-v-3-0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D0F-B1C2-996A",
			serviceId: "4D0F-B1C2-996A",
			displayName:
				"NETSCOUT Systems, Inc. NETSCOUT Application Performance Management for GCP - nGeniusONE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D43-036A-2F1F",
			serviceId: "4D43-036A-2F1F",
			displayName: "Cognosys Inc. PWCT on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D53-C728-814D",
			serviceId: "4D53-C728-814D",
			displayName:
				"Prime Strategy Co.,Ltd. KUSANAGI for GCP Premium Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D5A-0613-0F02",
			serviceId: "4D5A-0613-0F02",
			displayName:
				"Techlatest.net Ansible AWX (Opensource alternative to Ansible Tower)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D64-3F51-98D6",
			serviceId: "4D64-3F51-98D6",
			displayName:
				"Cloud Infrastructure Services Proxy Server - Squid Proxy Cache on Ubuntu 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D6B-F1C3-FF14",
			serviceId: "4D6B-F1C3-FF14",
			displayName: "Metatype, Inc. Copilot for Web Development",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4D87-74E2-0CF0",
			serviceId: "4D87-74E2-0CF0",
			displayName:
				"Pulse Secure, LLC Traffic Manager Standard Edition & WAF - 10 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4DF8-F0E2-B09F",
			serviceId: "4DF8-F0E2-B09F",
			displayName:
				"Palo Alto Networks, Inc. VM-Series Next-Generation Firewall Bundle 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4E1A-BF2A-21FC",
			serviceId: "4E1A-BF2A-21FC",
			displayName:
				"Fortinet Inc. Fortinet FortiADC-VM Application Delivery Controller BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4E25-6CF4-4213",
			serviceId: "4E25-6CF4-4213",
			displayName: "Cognosys Inc. Secured Mautic on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4E26-114D-8138",
			serviceId: "4E26-114D-8138",
			displayName: "Server General MySQL Secured by Server General",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4EED-59C5-0069",
			serviceId: "4EED-59C5-0069",
			displayName: "Kinvolk Flatcar Container Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4F1F-4D13-9C72",
			serviceId: "4F1F-4D13-9C72",
			displayName: "Miri Infotech Thelia2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4F40-2655-BB88",
			serviceId: "4F40-2655-BB88",
			displayName: "Cognosys Inc. LAMP on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4F7A-EEA4-2B71",
			serviceId: "4F7A-EEA4-2B71",
			displayName:
				"Cloud Infrastructure Services Joomla Server + MySQL + Apache + phpMyadmin Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4F8F-B8CE-79D2",
			serviceId: "4F8F-B8CE-79D2",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2008 R2 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4F91-9FCF-8CA1",
			serviceId: "4F91-9FCF-8CA1",
			displayName: "StackRox Security Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4FB1-CEAC-B1F3",
			serviceId: "4FB1-CEAC-B1F3",
			displayName: "Miri Infotech Prestashop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/4FB3-0314-7CCE",
			serviceId: "4FB3-0314-7CCE",
			displayName:
				"Cognosys Inc. Visual Studio 2017 Professional on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5013-42B5-C15C",
			serviceId: "5013-42B5-C15C",
			displayName:
				"Cognosys Inc. Secured SQL Server 2012 Enterprise on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5023-8AFF-780A",
			serviceId: "5023-8AFF-780A",
			displayName: "Miri Infotech Hadoop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/507C-5C96-3F57",
			serviceId: "507C-5C96-3F57",
			displayName: "Cognosys Inc. Apache Web Server with RedHat 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5082-3BAA-623A",
			serviceId: "5082-3BAA-623A",
			displayName: "F5, Inc f5-big-best-plus-payg-25mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/50C8-D359-64EA",
			serviceId: "50C8-D359-64EA",
			displayName: "Google Maps Mobile SDK",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/50EC-B032-63ED",
			serviceId: "50EC-B032-63ED",
			displayName:
				"Fortinet Inc. Fortinet FortiADC Application Delivery Controller PAYG 100Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/512B-A208-280F",
			serviceId: "512B-A208-280F",
			displayName:
				"Cloud Infrastructure Services VPN Server Solution using SoftEther VPN on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5136-1E0B-EF28",
			serviceId: "5136-1E0B-EF28",
			displayName: "Bitnami Ametys Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5138-9C66-5914",
			serviceId: "5138-9C66-5914",
			displayName:
				"Cloud Infrastructure Services Apache Tomcat Server on Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5168-C8D9-3CBD",
			serviceId: "5168-C8D9-3CBD",
			displayName: "ANALOG INNOVATION PVT LTD Litecoin Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/517F-EFF5-6570",
			serviceId: "517F-EFF5-6570",
			displayName: "Miri Infotech Moodle",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5192-DDA4-E6C8",
			serviceId: "5192-DDA4-E6C8",
			displayName: "Frontline Red Hat 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5199-4CC9-178F",
			serviceId: "5199-4CC9-178F",
			displayName: "Sureline Systems, Inc DaTA Rehydrator",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/51C6-B3F5-9B38",
			serviceId: "51C6-B3F5-9B38",
			displayName: "Dataplex",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/51E1-5E6D-6864",
			serviceId: "51E1-5E6D-6864",
			displayName:
				"staging-n4gcp-neo4j-io Neo4j GCP Integration Service (Staging)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/51E5-2D0F-23B4",
			serviceId: "51E5-2D0F-23B4",
			displayName:
				"Plesk on CentOS - Licensed - Website & WordPress Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5248-5C4B-C2B1",
			serviceId: "5248-5C4B-C2B1",
			displayName:
				"Cloud Infrastructure Services Apache Kafka Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5255-C58D-71A4",
			serviceId: "5255-C58D-71A4",
			displayName: "HackerBay, Inc. Fyipe",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/525C-AFA2-2EEB",
			serviceId: "525C-AFA2-2EEB",
			displayName: "Diyotta Data Integration - 4.1.0.3121.001 - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5264-6102-85AF",
			serviceId: "5264-6102-85AF",
			displayName:
				"Global IDs Inc Global IDs Data Ecosystem Evolution Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5283-DBF7-46E5",
			serviceId: "5283-DBF7-46E5",
			displayName:
				"Cloud Infrastructure Services Apache Kafka Server on CentOS 8.4 Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/528A-2BFE-770F",
			serviceId: "528A-2BFE-770F",
			displayName: "Pumpkin DB pumpkin-multicl2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/528A-362D-35F5",
			serviceId: "528A-362D-35F5",
			displayName: "Cognosys Inc. Secured MVC Forum on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/52D3-9E56-9EBC",
			serviceId: "52D3-9E56-9EBC",
			displayName: "Cognosys Inc. Tomcat on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/52DC-972A-39B2",
			serviceId: "52DC-972A-39B2",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 7.8 (v20200709)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5311-6757-51A2",
			serviceId: "5311-6757-51A2",
			displayName:
				"Cognosys Inc. Visual Studio Enterprise 2019 on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/538A-6646-0AC7",
			serviceId: "538A-6646-0AC7",
			displayName: "Portworx",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/53D0-432C-5FF4",
			serviceId: "53D0-432C-5FF4",
			displayName: "Frontline Debian 9",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/53D9-6F63-6C03",
			serviceId: "53D9-6F63-6C03",
			displayName: "Arrikto MiniKF",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5444-C159-AC4A",
			serviceId: "5444-C159-AC4A",
			displayName:
				"Cloud Infrastructure Services Docker Engine Community on Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5477-3D3D-24F1",
			serviceId: "5477-3D3D-24F1",
			displayName: "Etrans Lab Remote Desktop with Multi-user",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5482-D433-182C",
			serviceId: "5482-D433-182C",
			displayName: "LiteSpeed Technologies-public OpenLiteSpeed NodeJS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5490-F7B7-8DF6",
			serviceId: "5490-F7B7-8DF6",
			displayName: "Cloud Logging",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/54BD-2F64-9A4F",
			serviceId: "54BD-2F64-9A4F",
			displayName:
				"Cognosys Inc. Secured MySQL with IIS on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/54C8-E3A0-5E86",
			serviceId: "54C8-E3A0-5E86",
			displayName: "Google Click to Deploy MySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/54D9-AE93-A4A1",
			serviceId: "54D9-AE93-A4A1",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Standard Edition - 200 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/54DF-A7EA-DDBB",
			serviceId: "54DF-A7EA-DDBB",
			displayName: "Miri Infotech mahara",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5536-FA17-93E2",
			serviceId: "5536-FA17-93E2",
			displayName: "Dell EMC PowerProtect DD Virtual Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5547-ECDC-3A0E",
			serviceId: "5547-ECDC-3A0E",
			displayName: "Miri Infotech MODX",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5558-409A-1DD8",
			serviceId: "5558-409A-1DD8",
			displayName: "Cognosys Inc. MariaDB 10 With RedHat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5583-32E1-19BA",
			serviceId: "5583-32E1-19BA",
			displayName: "Tempered Networks Tempered Airwall Conductor v2.2.8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5599-A2D1-3D27",
			serviceId: "5599-A2D1-3D27",
			displayName:
				"Cloud Infrastructure Services Proxy Server - Squid Proxy Cache on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/55A6-940E-898E",
			serviceId: "55A6-940E-898E",
			displayName:
				"Denodo Technologies Inc. Denodo Platform 7.0 (2 Data Sources) on Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/55C4-A21A-FE04",
			serviceId: "55C4-A21A-FE04",
			displayName: "F5, Inc f5-big-best-plus-payg-1gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/55C9-DAA1-9AB0",
			serviceId: "55C9-DAA1-9AB0",
			displayName: "OmniSci, Inc. OmniSci Platform Community Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/55D6-116D-CBBD",
			serviceId: "55D6-116D-CBBD",
			displayName: "Google Click to Deploy Node.js",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5602-D6BC-2E26",
			serviceId: "5602-D6BC-2E26",
			displayName: "Rivery - SaaS ELT",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5609-74CB-9E62",
			serviceId: "5609-74CB-9E62",
			displayName: "Miri Infotech RabbitMQ",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5613-F43C-D38A",
			serviceId: "5613-F43C-D38A",
			displayName:
				"Pulse Secure, LLC Traffic Manager Enterprise Edition - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/562C-FB9F-FBE5",
			serviceId: "562C-FB9F-FBE5",
			displayName: "Cognosys Inc. Piwigo Gallery on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5635-D282-659C",
			serviceId: "5635-D282-659C",
			displayName:
				"Cloud Infrastructure Services Jenkins Server on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5636-A7BE-7292",
			serviceId: "5636-A7BE-7292",
			displayName: "Bitnami Re:dash Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/563F-6BCD-6E43",
			serviceId: "563F-6BCD-6E43",
			displayName: "Bitnami concrete5 Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/565F-9A07-60D4",
			serviceId: "565F-9A07-60D4",
			displayName: "Bitnami ActiveMQ Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/56A6-2BD7-D52B",
			serviceId: "56A6-2BD7-D52B",
			displayName: "Appspace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/56AA-8AC4-A092",
			serviceId: "56AA-8AC4-A092",
			displayName: "Cognosys Inc. Apache Web Server with CentOS 8.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/56DB-DD4F-1E6B",
			serviceId: "56DB-DD4F-1E6B",
			displayName: "Cognosys Inc. Nginx With Ubuntu Server 18-04 Lts",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/577C-275E-3D79",
			serviceId: "577C-275E-3D79",
			displayName:
				"Cognosys Inc. Secured SQL Server 2014 Web on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/578A-D456-1095",
			serviceId: "578A-D456-1095",
			displayName:
				"R-Brain Inc Enterprise Data Science Platform with Marketplace (DSP SM)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/57B5-0800-926C",
			serviceId: "57B5-0800-926C",
			displayName:
				"Cognosys Inc. Secured SQL Server 2016 Web on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/57B5-6587-446A",
			serviceId: "57B5-6587-446A",
			displayName:
				"Denodo Technologies Inc. Denodo Standard 8.0 Solution Manager on Linux (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/57D6-8E6B-2DE0",
			serviceId: "57D6-8E6B-2DE0",
			displayName: "Cloud Dataflow",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/580E-91E2-193E",
			serviceId: "580E-91E2-193E",
			displayName: "CARTODB Inc. CARTO Enterprise (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/581B-EB34-7CF9",
			serviceId: "581B-EB34-7CF9",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 6 Benchmark v2.0.2 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/588B-558B-6420",
			serviceId: "588B-558B-6420",
			displayName: "Server General Secure MySQL Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5897-F110-FB73",
			serviceId: "5897-F110-FB73",
			displayName: "Elotl buildscaler",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/58CD-E7C3-72CA",
			serviceId: "58CD-E7C3-72CA",
			displayName: "Stackdriver Monitoring",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/592F-B1C5-D57F",
			serviceId: "592F-B1C5-D57F",
			displayName: "Cognosys Inc. Mediawiki With Ubuntu Server 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5957-0099-AD5C",
			serviceId: "5957-0099-AD5C",
			displayName: "F5 Networks F5 Advanced WAF (PAYG, 8vCPU)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/595C-92E2-8FBA",
			serviceId: "595C-92E2-8FBA",
			displayName: "Theta Labs, Inc theta-guardian-node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5985-B40D-2986",
			serviceId: "5985-B40D-2986",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - GOOD  (PAYG, 1Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5996-C086-69C6",
			serviceId: "5996-C086-69C6",
			displayName:
				"Cognosys Inc. SQL Server Enterprise 2017 on Linux - Redhat 7.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/59A8-B227-744B",
			serviceId: "59A8-B227-744B",
			displayName:
				"Cloud Infrastructure Services Jitsi Meet Video Conferencing on Ubuntu",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/59D2-44E6-2FA2",
			serviceId: "59D2-44E6-2FA2",
			displayName: "Tempered Networks Tempered Airwall Appliance v2.2.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/59D3-CF6E-3582",
			serviceId: "59D3-CF6E-3582",
			displayName: "Techlatest.net puppet-foreman",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/59F0-AD94-BE1B",
			serviceId: "59F0-AD94-BE1B",
			displayName:
				"NetFoundry Inc. NetFoundry Zero Trust Networking Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/59F5-8CE3-F439",
			serviceId: "59F5-8CE3-F439",
			displayName:
				"Denodo Technologies Inc. Denodo Platform 8.0 VDP on Linux (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5A62-8802-FC2A",
			serviceId: "5A62-8802-FC2A",
			displayName: "Techlatest.net vscode-cloud-ide",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5A9E-E4CF-3989",
			serviceId: "5A9E-E4CF-3989",
			displayName: "Cognosys Inc. Hardened Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5ABA-FDAC-EFDA",
			serviceId: "5ABA-FDAC-EFDA",
			displayName: "Cognosys Inc. Secured Opencart on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5AD5-B534-E9A3",
			serviceId: "5AD5-B534-E9A3",
			displayName:
				"Teradici Cloud Access Software-Standard for Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5AF5-2C11-D467",
			serviceId: "5AF5-2C11-D467",
			displayName: "Cloud Memorystore for Redis",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5B0B-EC43-D601",
			serviceId: "5B0B-EC43-D601",
			displayName: "Netsil - Application Operations Center (Self-Hosted)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5B11-E751-094F",
			serviceId: "5B11-E751-094F",
			displayName: "Cognosys Inc. CentOS 7 Hardened",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5B47-A9FF-7CCE",
			serviceId: "5B47-A9FF-7CCE",
			displayName: "Miri Infotech inoERP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5B48-308A-1927",
			serviceId: "5B48-308A-1927",
			displayName: "Cognosys Inc. Lamp With RedHat 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5B4B-FC5C-5A9D",
			serviceId: "5B4B-FC5C-5A9D",
			displayName: "HYCU, Inc HYCU",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5BA5-7EB9-D993",
			serviceId: "5BA5-7EB9-D993",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2019 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5BA9-8DD4-D85C",
			serviceId: "5BA9-8DD4-D85C",
			displayName: "Dataproc Metastore",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5C21-7861-82A9",
			serviceId: "5C21-7861-82A9",
			displayName:
				"Cloud Infrastructure Services Squid Proxy Cache Server on CentOS 8.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5C29-CD79-497D",
			serviceId: "5C29-CD79-497D",
			displayName: "Techlatest.net desktop-linux-suse",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5C35-4896-81FB",
			serviceId: "5C35-4896-81FB",
			displayName: "Google Click to Deploy Redmine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5C4B-347E-1A52",
			serviceId: "5C4B-347E-1A52",
			displayName:
				"Denodo Technologies Inc. Denodo Platform 7.0 (5 Data Sources) on Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5CAB-4C2C-F85C",
			serviceId: "5CAB-4C2C-F85C",
			displayName: "Cognosys Inc. MediaWiki on CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5CC9-3D44-5F79",
			serviceId: "5CC9-3D44-5F79",
			displayName: "Trifacta Cloud Dataprep by Trifacta",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5CDA-5E98-A686",
			serviceId: "5CDA-5E98-A686",
			displayName: "Bitnami Apache Guacamole Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5D00-C4D5-1F5C",
			serviceId: "5D00-C4D5-1F5C",
			displayName: "Corezoid Process Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5D1A-446C-487A",
			serviceId: "5D1A-446C-487A",
			displayName:
				"Cognosys Inc. LMS powered by Moodle With CentOS 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5DA6-6B13-4347",
			serviceId: "5DA6-6B13-4347",
			displayName:
				"Check Point Software Technologies Check Point CloudGuard IaaS High Availability (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5DB8-75EA-9587",
			serviceId: "5DB8-75EA-9587",
			displayName:
				"Cognosys Inc. Visual Studio Community 2019 on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5DD3-CA5C-D8EA",
			serviceId: "5DD3-CA5C-D8EA",
			displayName: "Firebase",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5DDC-21CB-930B",
			serviceId: "5DDC-21CB-930B",
			displayName: "Joget Inc Joget DX Enterprise Edition - VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5DE0-09F1-3F8A",
			serviceId: "5DE0-09F1-3F8A",
			displayName: "Pumpkin DB pumpkin-multicl1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5DE8-A315-AE25",
			serviceId: "5DE8-A315-AE25",
			displayName: "Tempered Networks Tempered Airwall Conductor v2.2.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E18-2002-663A",
			serviceId: "5E18-2002-663A",
			displayName:
				"Cloud Infrastructure Services Magento Server Open Source on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E18-9A83-2867",
			serviceId: "5E18-9A83-2867",
			displayName: "VM Manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E1F-C8AE-04FB",
			serviceId: "5E1F-C8AE-04FB",
			displayName: "Synopsys Black Duck by Synopsys",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E21-E625-9127",
			serviceId: "5E21-E625-9127",
			displayName: "Cognosys Inc. Secured Mantis on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E34-962A-8DCF",
			serviceId: "5E34-962A-8DCF",
			displayName: "Zadara Cube - 1.6TB SSD Block and File Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E4B-695C-5438",
			serviceId: "5E4B-695C-5438",
			displayName:
				"Bitnami WordPress Multi-Tier Certified by Bitnami and Automattic",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E6C-4196-98D8",
			serviceId: "5E6C-4196-98D8",
			displayName: "Miri Infotech pydio-v-2-2-9",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5E95-304A-CAC1",
			serviceId: "5E95-304A-CAC1",
			displayName:
				"Cloud Infrastructure Services Ruby on Rails Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5EB9-EF7B-3D67",
			serviceId: "5EB9-EF7B-3D67",
			displayName:
				"NVIDIA Quadro Virtual Workstation - Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5EEB-E2CB-29E1",
			serviceId: "5EEB-E2CB-29E1",
			displayName: "Cisco Systems Cisco ASA virtual firewall (ASAv)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5EEF-F844-3D56",
			serviceId: "5EEF-F844-3D56",
			displayName: "Bitnami ZooKeeper Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5F85-3212-C887",
			serviceId: "5F85-3212-C887",
			displayName: "Striim Inc. StreamShift by Striim",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5FB8-1C45-6E1E",
			serviceId: "5FB8-1C45-6E1E",
			displayName: "Cognosys Inc. Secured BugNet on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/5FF3-2FED-2805",
			serviceId: "5FF3-2FED-2805",
			displayName: "Cognosys Inc. Thinkup on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6007-9075-CB8A",
			serviceId: "6007-9075-CB8A",
			displayName: "Pluto7 Planning In A Box",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/601F-0765-7EEF",
			serviceId: "601F-0765-7EEF",
			displayName: "Ascend.io Ascend Unified Data Engineering Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6083-E3C3-38BC",
			serviceId: "6083-E3C3-38BC",
			displayName: "GliaStudio",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6094-8BEA-0A7B",
			serviceId: "6094-8BEA-0A7B",
			displayName:
				"Cisco Systems Cisco Cloud Services Router 1000V - 16.12 - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60B2-4979-FB9A",
			serviceId: "60B2-4979-FB9A",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2012 R2 Benchmark v2.2.1 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60BD-C45F-DA72",
			serviceId: "60BD-C45F-DA72",
			displayName:
				"iKala interactive media inc. StraaS Cloud Media Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60D8-7F56-0CAE",
			serviceId: "60D8-7F56-0CAE",
			displayName: "Etrans Lab Magento",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60EA-1D83-3909",
			serviceId: "60EA-1D83-3909",
			displayName: "Google Click to Deploy MySQL 8 (Codelab)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60EF-4F59-BD28",
			serviceId: "60EF-4F59-BD28",
			displayName:
				"Cognosys Inc. Secured SQL Server 2017 Enterprise on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60F1-068D-0A29",
			serviceId: "60F1-068D-0A29",
			displayName: "Cognosys Inc. Lamp With CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60F6-6211-5EDF",
			serviceId: "60F6-6211-5EDF",
			displayName:
				"Cognosys Inc. Docker Community Edition With Centos 7.8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60F9-C2E3-59FC",
			serviceId: "60F9-C2E3-59FC",
			displayName:
				"Cognosys Inc. Secured SQL Server 2017 Express on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/60FC-C056-2AD0",
			serviceId: "60FC-C056-2AD0",
			displayName: "Jetstack Ltd. Jetstack Secure for cert-manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6125-1328-0C0E",
			serviceId: "6125-1328-0C0E",
			displayName:
				"Buddy - Disposable Test Environments & Deployment Pipelines",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/613A-2325-ED63",
			serviceId: "613A-2325-ED63",
			displayName: "Portworx Enterprise (Managed Updates)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61A2-7AC7-12FA",
			serviceId: "61A2-7AC7-12FA",
			displayName: "BeyondTrust Software, Inc. BeyondInsight (SQL-Free)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61AB-4958-4BBF",
			serviceId: "61AB-4958-4BBF",
			displayName:
				"Thales - European Union - Frankfurt CipherTrust Manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61AB-7C62-44DB",
			serviceId: "61AB-7C62-44DB",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BEST  (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61BA-675F-842F",
			serviceId: "61BA-675F-842F",
			displayName: "Frontline CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61D7-C9A9-27EA",
			serviceId: "61D7-C9A9-27EA",
			displayName: "Frontline Ubuntu 20",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61DD-B853-FE08",
			serviceId: "61DD-B853-FE08",
			displayName: "ZETTALANE SYSTEMS LLC MayaNAS Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61DF-80CC-AC56",
			serviceId: "61DF-80CC-AC56",
			displayName: "Cognosys Inc. DNN Platform on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61EB-263A-3DDF",
			serviceId: "61EB-263A-3DDF",
			displayName:
				"Plesk on CentOS - BYOL - Website & WordPress Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/61EE-F60E-8BBD",
			serviceId: "61EE-F60E-8BBD",
			displayName: "Cognosys Inc. Silverstripe on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6239-326A-AE4F",
			serviceId: "6239-326A-AE4F",
			displayName:
				"Cognosys Inc. Secured CMS Made Simple on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6261-451A-BE8E",
			serviceId: "6261-451A-BE8E",
			displayName: "Techlatest.net Go cloud IDE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/62A6-04B2-A46E",
			serviceId: "62A6-04B2-A46E",
			displayName: "NGINX, Inc NGINX Plus - RHEL 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/62DB-0AB9-96FA",
			serviceId: "62DB-0AB9-96FA",
			displayName:
				"Pulse Secure, LLC Traffic Manager Standard Edition & WAF - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/62DD-D2F3-6C10",
			serviceId: "62DD-D2F3-6C10",
			displayName: "Cloud Infrastructure Services CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/62EF-9210-8AB5",
			serviceId: "62EF-9210-8AB5",
			displayName:
				"Google Click to Deploy ELK Stack: Elasticsearch, Logstash, Kibana",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6302-A21E-39D8",
			serviceId: "6302-A21E-39D8",
			displayName: "cPanel, L.L.C. cPanel & WHM on Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6337-B5F5-2B62",
			serviceId: "6337-B5F5-2B62",
			displayName:
				"Varnish Software Inc. Varnish Custom Statistics (Red Hat)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6342-64CC-E8CF",
			serviceId: "6342-64CC-E8CF",
			displayName: "HyTrust, Inc. HyTrust KeyControl",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6378-667C-1B8C",
			serviceId: "6378-667C-1B8C",
			displayName: "Cognosys Inc. Concrete5 on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/639F-0553-F948",
			serviceId: "639F-0553-F948",
			displayName: "ANALOG INDUSTRIES LLP Accelerated Caprover",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/63DE-82AB-F564",
			serviceId: "63DE-82AB-F564",
			displayName: "Cloud Speech API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/63EF-53A0-9459",
			serviceId: "63EF-53A0-9459",
			displayName: "Cognosys Inc. Jenkins With CentOS 8-stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/63F4-594F-854C",
			serviceId: "63F4-594F-854C",
			displayName: "Bitnami Neo4j Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6410-3B66-DC46",
			serviceId: "6410-3B66-DC46",
			displayName: "Bitnami Discourse Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6426-5E03-C224",
			serviceId: "6426-5E03-C224",
			displayName: "SlamData Inc. SlamData REFORM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6460-6D7F-91FD",
			serviceId: "6460-6D7F-91FD",
			displayName: "Cognosys Inc. CentOS 7.8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/646F-466D-4C79",
			serviceId: "646F-466D-4C79",
			displayName: "Cognosys Inc. Acquia Drupal on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6473-3163-21D4",
			serviceId: "6473-3163-21D4",
			displayName: "Miri Infotech MyBB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/64F4-C615-7E18",
			serviceId: "64F4-C615-7E18",
			displayName:
				"Cloud Infrastructure Services Active Directory Certificate Services PKI on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/650B-3C82-34DB",
			serviceId: "650B-3C82-34DB",
			displayName: "BigQuery BI Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/650E-4907-F240",
			serviceId: "650E-4907-F240",
			displayName: "MYFUNDBOX FundraisingCRM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6519-E9CC-A975",
			serviceId: "6519-E9CC-A975",
			displayName:
				"IBM Security QRadar Security Intelligence Platform Managed Host v7.3.2 P1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6547-23E5-27C2",
			serviceId: "6547-23E5-27C2",
			displayName: "Bitnami Simple Machines Forum Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6576-BFDA-E734",
			serviceId: "6576-BFDA-E734",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BETTER  (PAYG, 5Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/65DF-8A98-0834",
			serviceId: "65DF-8A98-0834",
			displayName: "Confidential Computing",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/65F5-FABA-6FBD",
			serviceId: "65F5-FABA-6FBD",
			displayName: "MongoDB Inc. atlas-pro-3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6607-EE7E-5A39",
			serviceId: "6607-EE7E-5A39",
			displayName: "Cognosys Inc. Wordpress With CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6610-4BC6-8452",
			serviceId: "6610-4BC6-8452",
			displayName: "ANALOG INNOVATION PVT LTD Secured Ripple Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6612-CCB6-3059",
			serviceId: "6612-CCB6-3059",
			displayName: "AtScale Inc AtScale Intelligence Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6646-6891-C9FA",
			serviceId: "6646-6891-C9FA",
			displayName: "Google Click to Deploy InfluxDB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/666D-6702-114A",
			serviceId: "666D-6702-114A",
			displayName:
				"CIS (Center for Internet Security) CIS NGINX on CentOS Linux 7 Benchmark - Level 1 - Webserver",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/666D-FC70-D8BA",
			serviceId: "666D-FC70-D8BA",
			displayName: "RStudio, PBC RStudio Connect Base - 20 Users",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6677-E439-6652",
			serviceId: "6677-E439-6652",
			displayName: "Google Click to Deploy WordPress Multisite",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/66FE-EB5D-D838",
			serviceId: "66FE-EB5D-D838",
			displayName:
				"Rohde & Schwarz Cybersecurity SAS R&SWeb Application Firewall - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6712-6BC2-99BD",
			serviceId: "6712-6BC2-99BD",
			displayName: "Appranix Site Reliability Automation",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6743-CDA3-F21C",
			serviceId: "6743-CDA3-F21C",
			displayName: "Zabbix SIA Zabbix 4.4 - Medium performance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6748-3765-DAE0",
			serviceId: "6748-3765-DAE0",
			displayName:
				"Fortinet Inc. Fortinet FortiADC Application Delivery Controller PAYG 5Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6763-E14D-F791",
			serviceId: "6763-E14D-F791",
			displayName: "DKube",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6818-A20C-2592",
			serviceId: "6818-A20C-2592",
			displayName: "zData Cloud Enablement Services",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6822-61CA-81F0",
			serviceId: "6822-61CA-81F0",
			displayName: "Frontline Hardened Red Hat 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/683C-45E1-DE5B",
			serviceId: "683C-45E1-DE5B",
			displayName: "Maps Embed API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/684C-68D3-8402",
			serviceId: "684C-68D3-8402",
			displayName: "Citrix Systems, Inc. Citrix ADM Agent",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6855-7789-BB88",
			serviceId: "6855-7789-BB88",
			displayName: "Confluent Staging Confluent Cloud Service Stag",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/68A5-4F2A-1EAE",
			serviceId: "68A5-4F2A-1EAE",
			displayName: "Cognosys Inc. Seopanel on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/68B0-C424-70B4",
			serviceId: "68B0-C424-70B4",
			displayName: "Frontline Debian 10",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/68BC-17DE-6AB8",
			serviceId: "68BC-17DE-6AB8",
			displayName: "Liquidware Stratusphere UX (6.1.5)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/68C4-B085-ABBF",
			serviceId: "68C4-B085-ABBF",
			displayName: "Miri Infotech Spree",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/68FB-7D8F-BCEE",
			serviceId: "68FB-7D8F-BCEE",
			displayName: "Miri Infotech GithubCE-v2-9-0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6910-147C-4426",
			serviceId: "6910-147C-4426",
			displayName: "Pluto7 Healthcare ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6928-273B-F493",
			serviceId: "6928-273B-F493",
			displayName: "Bitnami Apache Solr Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/693E-A725-046A",
			serviceId: "693E-A725-046A",
			displayName:
				"Perforce Software Inc. OpenLogic RockyLinux 8.3.2011-RC1 (v20210503)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6944-9B66-8926",
			serviceId: "6944-9B66-8926",
			displayName: "Bitnami LimeSurvey Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/695E-218F-B8A1",
			serviceId: "695E-218F-B8A1",
			displayName: "Google Click to Deploy Apache HTTP Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6964-8E2E-8DD6",
			serviceId: "6964-8E2E-8DD6",
			displayName: "Bitnami Parse Server Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6968-8416-992A",
			serviceId: "6968-8416-992A",
			displayName:
				"Cloud Infrastructure Services WAMP Windows Web Server 2016 + Apache + MariaDB + phpMyadmin",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6989-D2BD-317E",
			serviceId: "6989-D2BD-317E",
			displayName:
				"dev-n4gcp-neo4j-io-251218 Neo4j GCP Integration Service (Dev)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/69E9-C236-6E87",
			serviceId: "69E9-C236-6E87",
			displayName: "ScaleArc for MS SQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/69F2-7277-0131",
			serviceId: "69F2-7277-0131",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2019 Benchmark - Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/69F6-D067-EDB2",
			serviceId: "69F6-D067-EDB2",
			displayName:
				"F5 Networks F5 BIG-IP VE  LTM/DNS   (BYOL, 1 Boot Location)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6A09-34A5-47D2",
			serviceId: "6A09-34A5-47D2",
			displayName: "Bitnami CiviCRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6A61-BEF8-949C",
			serviceId: "6A61-BEF8-949C",
			displayName: "Iron Mountain InSight",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6A73-1BB1-C8FA",
			serviceId: "6A73-1BB1-C8FA",
			displayName: "Cognosys Inc. Apache Web Server with CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6A8D-CDFC-FEBF",
			serviceId: "6A8D-CDFC-FEBF",
			displayName: "Bitnami WildFly Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6A98-DF7D-EB0A",
			serviceId: "6A98-DF7D-EB0A",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BEST  (PAYG, 5Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6B6E-2417-6000",
			serviceId: "6B6E-2417-6000",
			displayName:
				"Cloud Infrastructure Services GeoServer on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6B94-D1B5-8ED7",
			serviceId: "6B94-D1B5-8ED7",
			displayName:
				"Cavirin Systems Cavirin First Line of Defense for Cloud Security - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6BD3-BF6B-4CAE",
			serviceId: "6BD3-BF6B-4CAE",
			displayName: "Ergon Informatik AG Airlock Secure Access Hub",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6BD4-1D3D-C6E7",
			serviceId: "6BD4-1D3D-C6E7",
			displayName: "Bitnami Alfresco Community Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6BF2-9647-1F3F",
			serviceId: "6BF2-9647-1F3F",
			displayName: "Cognosys Inc. NGINX on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6C11-108E-BEAB",
			serviceId: "6C11-108E-BEAB",
			displayName: "Google Click to Deploy Redash",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6C48-0290-0528",
			serviceId: "6C48-0290-0528",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 2.6.1 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6C4E-299E-9FB0",
			serviceId: "6C4E-299E-9FB0",
			displayName: "Bitnami XOOPS Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6C88-3A8D-1571",
			serviceId: "6C88-3A8D-1571",
			displayName: "Kaspersky Hybrid Cloud Security (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6CB6-0088-D9BB",
			serviceId: "6CB6-0088-D9BB",
			displayName: "Veritas Technologies Veritas NetBackup 9.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6CD9-8229-22B6",
			serviceId: "6CD9-8229-22B6",
			displayName: "Cloud IoT Core",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6CDC-7653-982B",
			serviceId: "6CDC-7653-982B",
			displayName:
				"Cloud Infrastructure Services Mail Proxy Server using NGINX on Ubuntu",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6CFA-60D9-886C",
			serviceId: "6CFA-60D9-886C",
			displayName: "Miri Infotech Yetiforce",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6D00-AF6F-534B",
			serviceId: "6D00-AF6F-534B",
			displayName: "Miri Infotech Chamilo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6D0D-1152-54D0",
			serviceId: "6D0D-1152-54D0",
			displayName: "Bitnami Redis High Availability",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6D1E-C0E7-C9FD",
			serviceId: "6D1E-C0E7-C9FD",
			displayName: "Kinvolk flatcar-pro",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6D46-09F3-6883",
			serviceId: "6D46-09F3-6883",
			displayName:
				"Cognosys Inc. Secured Wordpress on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6D58-5F95-0E49",
			serviceId: "6D58-5F95-0E49",
			displayName: "RStudio, PBC RStudio Connect Enterprise - 1000 Users",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6D74-C836-F2CD",
			serviceId: "6D74-C836-F2CD",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 8.4 (v20210624)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6DCE-92FD-C3D1",
			serviceId: "6DCE-92FD-C3D1",
			displayName: "Miri Infotech contao",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6DD0-DD2B-03A3",
			serviceId: "6DD0-DD2B-03A3",
			displayName:
				"Cognosys Inc. Secured SQL Server 2017 Standard on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6E55-20D2-F410",
			serviceId: "6E55-20D2-F410",
			displayName: "Techlatest.net Bitcoin Full Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6E9E-8DA0-B373",
			serviceId: "6E9E-8DA0-B373",
			displayName:
				"Dell EMC PowerProtect Data Manager and PowerProtect DD Virtual Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6EDA-0BDF-041C",
			serviceId: "6EDA-0BDF-041C",
			displayName: "Aiven for Elasticsearch",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6F30-43CC-1484",
			serviceId: "6F30-43CC-1484",
			displayName:
				"Cloud Infrastructure Services MySQL Server + phpMyadmin + Apache Web Server CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6F5E-3615-2637",
			serviceId: "6F5E-3615-2637",
			displayName: "Cognosys Inc. Secured Magento on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6F81-5844-456A",
			serviceId: "6F81-5844-456A",
			displayName: "Compute Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/6FFB-B71E-5A0F",
			serviceId: "6FFB-B71E-5A0F",
			displayName: "Integration Connectors",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7007-A701-2D25",
			serviceId: "7007-A701-2D25",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BEST  (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7019-416C-84C0",
			serviceId: "7019-416C-84C0",
			displayName:
				"Cloud Infrastructure Services Cloud Print Server on Windows Server 2016 Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/701E-191B-00AF",
			serviceId: "701E-191B-00AF",
			displayName: "Cognosys Inc. Coppermine on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7088-FDF6-8532",
			serviceId: "7088-FDF6-8532",
			displayName: "Cloud Data Labeling Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/70A3-E857-1302",
			serviceId: "70A3-E857-1302",
			displayName: "Pumpkin DB pumpkin-saas-fixed-fee-sku-write",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/70B9-8DA7-1747",
			serviceId: "70B9-8DA7-1747",
			displayName: "Sureline Systems, Inc SUREedge Migrator",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/70FA-F379-D42F",
			serviceId: "70FA-F379-D42F",
			displayName: "Google Click to Deploy Django Stack",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/716B-AB15-8790",
			serviceId: "716B-AB15-8790",
			displayName: "OmniSci, Inc. OmniSciDB for CPU (Open Source)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/716C-3966-FB78",
			serviceId: "716C-3966-FB78",
			displayName:
				"Cisco Systems Cisco Cloud Services Router 1000V (CSR 1000V)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/71C9-C1B5-A15D",
			serviceId: "71C9-C1B5-A15D",
			displayName: "Enonic XP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/71CB-8476-F01C",
			serviceId: "71CB-8476-F01C",
			displayName: "MinIO Object Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/71CD-6EAA-5E92",
			serviceId: "71CD-6EAA-5E92",
			displayName: "Bitnami DreamFactory Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7200-E915-9CC4",
			serviceId: "7200-E915-9CC4",
			displayName:
				"Check Point Software Technologies Check Point CloudGuard IaaS Firewall & Threat Prevention (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7210-6C7D-DDA4",
			serviceId: "7210-6C7D-DDA4",
			displayName: "Google Click to Deploy Tomcat",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7212-C2ED-E9B9",
			serviceId: "7212-C2ED-E9B9",
			displayName: "Miri Infotech MRBS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7221-754B-413F",
			serviceId: "7221-754B-413F",
			displayName: "Guardicore Infection Monkey",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/726C-7091-AB38",
			serviceId: "726C-7091-AB38",
			displayName: "Cognosys Inc. Apache Web Server with RedHat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7283-C3DA-65F5",
			serviceId: "7283-C3DA-65F5",
			displayName: "Bitnami OpenCart Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7294-7775-77D2",
			serviceId: "7294-7775-77D2",
			displayName: "Bitnami SilverStripe Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/72A1-13EC-7C0E",
			serviceId: "72A1-13EC-7C0E",
			displayName: "LABS.AI E.D.D.I - Open Source Chatbot Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/72B9-712F-D234",
			serviceId: "72B9-712F-D234",
			displayName:
				"Google Click to Deploy PostgreSQL Cluster (with Bucardo replication)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/735D-9479-4CD3",
			serviceId: "735D-9479-4CD3",
			displayName:
				"Cognosys Inc. Secured SQL Server 2017 Standard on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7369-3E4F-BB69",
			serviceId: "7369-3E4F-BB69",
			displayName: "Veritas Technologies Veritas NetBackup CloudPoint",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7376-C320-449C",
			serviceId: "7376-C320-449C",
			displayName: "LiteSpeed Technologies-public CyberPanel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/73DA-E903-54C9",
			serviceId: "73DA-E903-54C9",
			displayName: "Google Cloud Vision OCR On-Prem",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/73E4-0A4B-A37D",
			serviceId: "73E4-0A4B-A37D",
			displayName: "Cognosys Inc. MediaWiki on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7457-F010-E703",
			serviceId: "7457-F010-E703",
			displayName: "Google Click to Deploy WildFly Application Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7490-5F3E-73DE",
			serviceId: "7490-5F3E-73DE",
			displayName: "Fluid Numerics rcc-centos",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/749F-7748-5DE3",
			serviceId: "749F-7748-5DE3",
			displayName:
				"F5 Networks F5 Per-App VE - Advanced WAF + LTM (PAYG, 25M)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/74A3-99C6-1017",
			serviceId: "74A3-99C6-1017",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 3.0.6 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/74B1-77CF-C302",
			serviceId: "74B1-77CF-C302",
			displayName: "Discovery Engine API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/74F3-E14C-8724",
			serviceId: "74F3-E14C-8724",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BEST  (PAYG, 1Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/74FE-BD4D-8AF5",
			serviceId: "74FE-BD4D-8AF5",
			displayName: "Bitnami DokuWiki Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/752B-5C0F-4A6F",
			serviceId: "752B-5C0F-4A6F",
			displayName: "Bitnami Review Board Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/752B-E8FF-FF6B",
			serviceId: "752B-E8FF-FF6B",
			displayName:
				"Cognosys Inc. MySQL 5.7 on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7571-3836-B270",
			serviceId: "7571-3836-B270",
			displayName: "Miri Infotech Torch",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7579-B41A-F79A",
			serviceId: "7579-B41A-F79A",
			displayName: "Atomicorp AtomicWP Cloud Workload Security",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/759F-0B40-8EBC",
			serviceId: "759F-0B40-8EBC",
			displayName: "Cognosys Inc. mRemote on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/75BA-3F18-565B",
			serviceId: "75BA-3F18-565B",
			displayName: "Abzooba Inc. xpresso-ai",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/75F3-F43B-F19B",
			serviceId: "75F3-F43B-F19B",
			displayName: "Cognosys Inc. Docker Community Edition With RedHat 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7614-5E7F-4BD5",
			serviceId: "7614-5E7F-4BD5",
			displayName: "StorReduce",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7669-04F9-6CC0",
			serviceId: "7669-04F9-6CC0",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse OpenVINO Smart City Reference Implementation",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7671-D9A0-05F4",
			serviceId: "7671-D9A0-05F4",
			displayName: "Cognosys Inc. Cordova on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7684-4F7D-FE1F",
			serviceId: "7684-4F7D-FE1F",
			displayName: "ITsMine Beyond DLP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7691-09D6-4201",
			serviceId: "7691-09D6-4201",
			displayName: "PingCAP TiDB Operator",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7691-D813-9356",
			serviceId: "7691-D813-9356",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - Good (PAYG, 16vCPU)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/76A4-551D-DDA0",
			serviceId: "76A4-551D-DDA0",
			displayName: "Cognosys Inc. Jenkins on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/76E7-2B1A-C118",
			serviceId: "76E7-2B1A-C118",
			displayName:
				"Plesk for Windows - BYOL - Website & WordPress Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/76F4-6104-C0A5",
			serviceId: "76F4-6104-C0A5",
			displayName: "Google Click to Deploy OroCRM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/76FD-606F-7E3F",
			serviceId: "76FD-606F-7E3F",
			displayName: "Payment Gateway issuer switch",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7766-403C-6D6E",
			serviceId: "7766-403C-6D6E",
			displayName: "Certificate Manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/77B8-93BC-ACB6",
			serviceId: "77B8-93BC-ACB6",
			displayName:
				"Cognosys Inc. Visual Studio 2015 Community on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/77CD-0DB7-5CA7",
			serviceId: "77CD-0DB7-5CA7",
			displayName: "KubeMQ Ltd KubeMQ",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/77D5-956F-A0B6",
			serviceId: "77D5-956F-A0B6",
			displayName: "Array Networks, Inc. Array Networks vAPV - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7804-B2FE-6B35",
			serviceId: "7804-B2FE-6B35",
			displayName: "gClouds SQL Server 2019 Express Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7828-2857-2E45",
			serviceId: "7828-2857-2E45",
			displayName: "Sentrium S.L. VyOS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/782A-E450-E075",
			serviceId: "782A-E450-E075",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 3.1.1 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7831-9534-DC35",
			serviceId: "7831-9534-DC35",
			displayName: "Zype Add-On-Plans - Transcoding",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7833-560F-9F03",
			serviceId: "7833-560F-9F03",
			displayName: "F5 Networks F5 Advanced WAF  (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7836-8121-8807",
			serviceId: "7836-8121-8807",
			displayName: "Hazelcast Cloud Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/78E3-B648-E7ED",
			serviceId: "78E3-B648-E7ED",
			displayName:
				"Cloud Infrastructure Services Django Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7911-6254-7C38",
			serviceId: "7911-6254-7C38",
			displayName:
				"Cloud Infrastructure Services GitLab Server (CE) Community Edition on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7920-DD95-667F",
			serviceId: "7920-DD95-667F",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - GOOD  (PAYG, 5Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7929-AEC3-626F",
			serviceId: "7929-AEC3-626F",
			displayName: "Backup for GKE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/792A-84CE-4228",
			serviceId: "792A-84CE-4228",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Standard Edition - 3 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7963-9CEF-6476",
			serviceId: "7963-9CEF-6476",
			displayName: "Tick Tock Networks Tick Tock Clock Sync & Monitoring",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7992-D2EA-CE7F",
			serviceId: "7992-D2EA-CE7F",
			displayName: "Bitnami MyBB Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/799E-F9CE-1727",
			serviceId: "799E-F9CE-1727",
			displayName: "NGINX, Inc NGINX Plus Standard - Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/79C8-2688-ACCA",
			serviceId: "79C8-2688-ACCA",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/79E6-38AE-C169",
			serviceId: "79E6-38AE-C169",
			displayName: "Frontline Ubuntu 16",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/79EE-B0B6-1A9F",
			serviceId: "79EE-B0B6-1A9F",
			displayName:
				"Cloud Infrastructure Services XAMPP Server + Apache Web Server + MariaDB on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7A36-CA7C-E7CA",
			serviceId: "7A36-CA7C-E7CA",
			displayName: "Cognosys Inc. PostgreSQL with CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7A39-C839-F857",
			serviceId: "7A39-C839-F857",
			displayName: "Bitnami RabbitMQ Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7A56-6F6B-0AD4",
			serviceId: "7A56-6F6B-0AD4",
			displayName: "Bitnami PostgreSQL with Replication",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7A84-B9E9-F017",
			serviceId: "7A84-B9E9-F017",
			displayName: "MazeBolt Technologies LTD. DDoS RADAR",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7A9E-1E5A-520F",
			serviceId: "7A9E-1E5A-520F",
			displayName:
				"Cognosys Inc. SQL Server Standard 2017 on Linux - Redhat 7.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7ADB-2D62-2E1A",
			serviceId: "7ADB-2D62-2E1A",
			displayName: "Miri Infotech TIKI WIKI CMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B14-71D0-9D79",
			serviceId: "7B14-71D0-9D79",
			displayName:
				"CIS (Center for Internet Security) CIS CentOS Linux 7 Benchmark v2.2.1 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B3A-1F85-E5F6",
			serviceId: "7B3A-1F85-E5F6",
			displayName: "Miri Infotech SPIP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B44-688E-B0EA",
			serviceId: "7B44-688E-B0EA",
			displayName: "Lightbend Inc. Akka Cloud Platform for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B46-3A52-5FF2",
			serviceId: "7B46-3A52-5FF2",
			displayName: "RStudio, PBC RStudio Connect Standard - 100 Users",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B48-FFDB-0D35",
			serviceId: "7B48-FFDB-0D35",
			displayName: "Etrans Lab V2Ray VPN",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B70-033A-0838",
			serviceId: "7B70-033A-0838",
			displayName: "Striim Inc. SMSGC",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7B74-107A-E481",
			serviceId: "7B74-107A-E481",
			displayName: "Kyvos Insights, Inc. kyvos-bi-acceleration-platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7C43-DC47-72C5",
			serviceId: "7C43-DC47-72C5",
			displayName: "Transfer Appliance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7C52-19D8-71EE",
			serviceId: "7C52-19D8-71EE",
			displayName: "Cloud Healthcare",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7C67-88BC-A03A",
			serviceId: "7C67-88BC-A03A",
			displayName: "BeyondTrust Software, Inc. BeyondInsight",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D15-0B35-8D25",
			serviceId: "7D15-0B35-8D25",
			displayName: "Miri Infotech Seopanel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D18-8F2F-7739",
			serviceId: "7D18-8F2F-7739",
			displayName: "Bitnami Memcached Multiple Instances",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D2A-D366-F5AF",
			serviceId: "7D2A-D366-F5AF",
			displayName: "Cognosys Inc. Acquia Drupal on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D4A-4634-8BEB",
			serviceId: "7D4A-4634-8BEB",
			displayName: "Panzura Inc. Panzura Freedom Filer CloudFS 8.0.2.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D4B-452B-4807",
			serviceId: "7D4B-452B-4807",
			displayName: "Loadbalancer.org Enterprise GCP Max",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D63-3A39-7C71",
			serviceId: "7D63-3A39-7C71",
			displayName:
				"Cognosys Inc. SQL Server Enterprise 2019 on Linux - Ubuntu 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7D88-CA44-BDCB",
			serviceId: "7D88-CA44-BDCB",
			displayName: "NGINX, Inc NGINX Plus Enterprise - RHEL7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7DAA-73FA-C23C",
			serviceId: "7DAA-73FA-C23C",
			displayName: "Bitnami Magento Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7DC4-7596-18D8",
			serviceId: "7DC4-7596-18D8",
			displayName:
				"Cloud Infrastructure Services RADIUS 2016 Server - Wireless Authentication NPS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7DC8-BD91-0B3A",
			serviceId: "7DC8-BD91-0B3A",
			displayName: "Bitnami MySQL Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7DEB-39C9-0134",
			serviceId: "7DEB-39C9-0134",
			displayName: "Cognosys Inc. Plone on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7DF1-EC3A-8AFD",
			serviceId: "7DF1-EC3A-8AFD",
			displayName: "Evidian SafeKit Farm Cluster on CentOS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7E3C-38E2-BF16",
			serviceId: "7E3C-38E2-BF16",
			displayName: "Qvera Interface Engine (QIE) 4.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7E43-FF50-6DD2",
			serviceId: "7E43-FF50-6DD2",
			displayName: "Helpy.io Helpy Pro Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7E45-FA14-601E",
			serviceId: "7E45-FA14-601E",
			displayName:
				"Cognosys Inc. SQL Server Standard 2019 on Linux - Ubuntu 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7E46-4D27-C869",
			serviceId: "7E46-4D27-C869",
			displayName: "NetFoundry Inc. NetFoundry Edge Router",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7E85-8305-7C0D",
			serviceId: "7E85-8305-7C0D",
			displayName:
				"Cognosys Inc. Secured SQL Server 2016 Enterprise on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7E89-D767-1538",
			serviceId: "7E89-D767-1538",
			displayName:
				"Cloud Infrastructure Services NFS 2016 Windows Storage File Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7EB2-1F1F-63B4",
			serviceId: "7EB2-1F1F-63B4",
			displayName:
				"Cloud Infrastructure Services Microsoft Web Application Proxy - ADFS WAP 2019 Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7EC6-CE53-9E39",
			serviceId: "7EC6-CE53-9E39",
			displayName: "Datastream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7EDC-06E7-3418",
			serviceId: "7EDC-06E7-3418",
			displayName: "Google Click to Deploy Solr",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7F0E-7E9E-75BA",
			serviceId: "7F0E-7E9E-75BA",
			displayName: "Cognosys Inc. MySQL 8.0 With RedHat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7F7F-516A-15EE",
			serviceId: "7F7F-516A-15EE",
			displayName: "Cognosys Inc. OrangeHRM on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/7FE9-2F5C-D83F",
			serviceId: "7FE9-2F5C-D83F",
			displayName: "Zype Add-On Plans - Content Delivery",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8070-BD1A-D4C6",
			serviceId: "8070-BD1A-D4C6",
			displayName:
				"Pulse Secure, LLC Traffic Manager Standard Edition - 10 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8075-0E05-5640",
			serviceId: "8075-0E05-5640",
			displayName: "Precog",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/807A-DB32-72DB",
			serviceId: "807A-DB32-72DB",
			displayName: "Cloud Contact Center AI Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/808A-FF31-2398",
			serviceId: "808A-FF31-2398",
			displayName: "Ergon Informatik AG Airlock Secure Access Hub",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/80A4-0993-4BF2",
			serviceId: "80A4-0993-4BF2",
			displayName: "Etrans Lab LAMP Stack With Webmin",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/80BB-9E57-982C",
			serviceId: "80BB-9E57-982C",
			displayName:
				"Fortinet Inc. FortiAnalyzer Centralized Logging/Reporting",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/80CB-C6F8-11A7",
			serviceId: "80CB-C6F8-11A7",
			displayName: "Starburst Enterprise-  Distributed SQL Query Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8106-83D6-189B",
			serviceId: "8106-83D6-189B",
			displayName: "Cognosys Inc. Secured Weka on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8109-BCC6-9A03",
			serviceId: "8109-BCC6-9A03",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 3.2.1 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8132-7DB3-225C",
			serviceId: "8132-7DB3-225C",
			displayName: "Zorroa Corp. Zorroa",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8178-2165-707E",
			serviceId: "8178-2165-707E",
			displayName:
				"OmniSci, Inc. OmniSci Platform Enterprise Edition - K80",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/81A1-C875-6A91",
			serviceId: "81A1-C875-6A91",
			displayName:
				"Cloud Infrastructure Services Nginx - On Windows Server 2016 - Proxy",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/81AB-04FB-885D",
			serviceId: "81AB-04FB-885D",
			displayName: "Miri Infotech SeoToaster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/81C8-3FA9-404C",
			serviceId: "81C8-3FA9-404C",
			displayName:
				"Cloud Infrastructure Services Nginx - On Windows Server 2019 - Proxy",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8204-C248-31CF",
			serviceId: "8204-C248-31CF",
			displayName:
				"CIS (Center for Internet Security) CIS SUSE Linux Enterprise Server 15 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8235-9E78-7FC0",
			serviceId: "8235-9E78-7FC0",
			displayName: "CubeBackup Inc. CubeBackup",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/825F-4E11-3963",
			serviceId: "825F-4E11-3963",
			displayName: "Bitnami OXID eShop Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8272-F8A9-59D3",
			serviceId: "8272-F8A9-59D3",
			displayName: "Qtum Chain Foundation Qtum-Core",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8279-7E75-72C9",
			serviceId: "8279-7E75-72C9",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/82AB-33B4-40D4",
			serviceId: "82AB-33B4-40D4",
			displayName: "Bitnami phpList Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/82AF-DE7A-51D0",
			serviceId: "82AF-DE7A-51D0",
			displayName: "Container Registry Vulnerability Scanning",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/82E8-8A35-AB9E",
			serviceId: "82E8-8A35-AB9E",
			displayName: "Google Click to Deploy Odoo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/82EA-6990-952C",
			serviceId: "82EA-6990-952C",
			displayName: "Pixit Media PixStor Cloud - Capacity Tier",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/82F7-F720-970A",
			serviceId: "82F7-F720-970A",
			displayName: "Aiven for Apache Kafka Connect",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8309-883F-5FD6",
			serviceId: "8309-883F-5FD6",
			displayName: "Aerospike Enterprise Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8350-081E-1AA3",
			serviceId: "8350-081E-1AA3",
			displayName:
				"StrongBox IT Pvt Ltd Modshield SB - Web Application Firewall (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8354-92BB-F1FC",
			serviceId: "8354-92BB-F1FC",
			displayName: "Cisco Systems Cisco Meraki vMX",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8356-8DF5-0170",
			serviceId: "8356-8DF5-0170",
			displayName: "Earth Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/83A7-3BD5-8799",
			serviceId: "83A7-3BD5-8799",
			displayName: "Twinword Inc. Word Associations API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/83B1-02ED-411B",
			serviceId: "83B1-02ED-411B",
			displayName:
				"Cognosys Inc. SQL Server 2019 Enterprise on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8480-0C9C-1578",
			serviceId: "8480-0C9C-1578",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse Dace ITwith Sense Traffic Pulse Smart Stadium Reference VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8497-4E62-4555",
			serviceId: "8497-4E62-4555",
			displayName:
				"Google Click to Deploy WordPress High Availability (Beta)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/84FB-5EB1-AFB0",
			serviceId: "84FB-5EB1-AFB0",
			displayName: "ANALOG INNOVATION PVT LTD Parity",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8534-F08B-BEBD",
			serviceId: "8534-F08B-BEBD",
			displayName: "Cloud Domains",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8573-3240-E3A4",
			serviceId: "8573-3240-E3A4",
			displayName: "Bitnami OrangeHRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8575-85CC-C502",
			serviceId: "8575-85CC-C502",
			displayName:
				"Perforce Software Inc. OpenLogic Navy Linux 8.4r1 (v20211115)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8578-07BA-008E",
			serviceId: "8578-07BA-008E",
			displayName: "Gluent Data Platform Bring Your Own License",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/85AA-7093-7E8E",
			serviceId: "85AA-7093-7E8E",
			displayName: "Cognosys Inc. MariaDB 10 With CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/85C4-386C-A9E9",
			serviceId: "85C4-386C-A9E9",
			displayName:
				"Cognosys Inc. Docker Community Edition With Centos 8.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/85CD-894A-BEAA",
			serviceId: "85CD-894A-BEAA",
			displayName: "Bitnami Redmine Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/85F6-35D3-58E0",
			serviceId: "85F6-35D3-58E0",
			displayName: "CognitiveScale Inc Cortex Certifai",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/85F6-517C-A755",
			serviceId: "85F6-517C-A755",
			displayName: "Bitnami Osclass Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8617-F172-5EBD",
			serviceId: "8617-F172-5EBD",
			displayName:
				"Cisco Systems Cisco Firepower NGFW virtual firewall (NGFWv)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/864E-20C8-19A6",
			serviceId: "864E-20C8-19A6",
			displayName: "Miri Infotech Openfire-V-4-6-4-03-08-2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8659-9E9C-9CE6",
			serviceId: "8659-9E9C-9CE6",
			displayName: "Datametica Solutions Pvt. Ltd Raven",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8685-B152-0312",
			serviceId: "8685-B152-0312",
			displayName: "Bitnami Joomla! Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/868D-B4C0-B499",
			serviceId: "868D-B4C0-B499",
			displayName:
				"Cloud Infrastructure Services Apache Tomcat Server on CentOS 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/86A8-4796-BD2B",
			serviceId: "86A8-4796-BD2B",
			displayName: "Google Click to Deploy Resource Space",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/86BC-6299-EA9B",
			serviceId: "86BC-6299-EA9B",
			displayName: "BlueCat Networks BlueCat DNS Edge Proxy Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/86CA-0294-6AFC",
			serviceId: "86CA-0294-6AFC",
			displayName: "Miri Infotech Matomo (piwik)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/86D4-A296-8078",
			serviceId: "86D4-A296-8078",
			displayName: "Varnish Software Inc. Varnish Cache 6 (Ubuntu)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/870C-C0D2-AACC",
			serviceId: "870C-C0D2-AACC",
			displayName: "Tempered Airwall Conductor v3.0.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8735-FD22-0718",
			serviceId: "8735-FD22-0718",
			displayName: "Firebase Test Lab",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/874A-0461-8D2D",
			serviceId: "874A-0461-8D2D",
			displayName: "Workload Manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/875A-F53B-84A0",
			serviceId: "875A-F53B-84A0",
			displayName: "Bitnami ownCloud Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/879F-1832-8749",
			serviceId: "879F-1832-8749",
			displayName: "Stackdriver",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/87F4-6ECD-7B2F",
			serviceId: "87F4-6ECD-7B2F",
			displayName:
				"Dell Technologies Dell EMC PowerScale for Google Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/886D-5E59-0D5C",
			serviceId: "886D-5E59-0D5C",
			displayName: "Fluid Numerics Fluid-Slurm-GCP(+OpenHPC)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/88A4-AE7A-CAEC",
			serviceId: "88A4-AE7A-CAEC",
			displayName: "Tackle.io, Inc. Tackle Upstream for GCP Marketplace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/88AE-2308-4D85",
			serviceId: "88AE-2308-4D85",
			displayName: "Bitnami Elasticsearch Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/88B0-A262-53CF",
			serviceId: "88B0-A262-53CF",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2008 R2 Benchmark v3.0.1 Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/88C2-F63A-C21B",
			serviceId: "88C2-F63A-C21B",
			displayName: "CloudQuest, Inc. Guardian",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8976-89D6-F991",
			serviceId: "8976-89D6-F991",
			displayName:
				"Cloud Infrastructure Services Firebird SQL RDBMS Server on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/89B9-6A5A-B358",
			serviceId: "89B9-6A5A-B358",
			displayName: "Data Catalog",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/89BD-C877-326D",
			serviceId: "89BD-C877-326D",
			displayName: "Aiven for Apache Cassandra",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8A2D-5CB1-345B",
			serviceId: "8A2D-5CB1-345B",
			displayName: "Google Distributed Cloud Edge",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8A36-CAFB-4970",
			serviceId: "8A36-CAFB-4970",
			displayName: "Miri Infotech Geeklog",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8A52-C215-089A",
			serviceId: "8A52-C215-089A",
			displayName: "Server General PostgreSQL Secured by Server General",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8A8F-D528-2821",
			serviceId: "8A8F-D528-2821",
			displayName:
				"Denodo Technologies Inc. Denodo Platform 7.0 (Unlimited) on Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8A93-9024-7334",
			serviceId: "8A93-9024-7334",
			displayName:
				"Cloud Infrastructure Services WordPress Server on Ubuntu 18.04 + Lets Encrypt + MariaDB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8AA9-F68E-488E",
			serviceId: "8AA9-F68E-488E",
			displayName: "Miri Infotech Subrion",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8ABC-77B1-AA02",
			serviceId: "8ABC-77B1-AA02",
			displayName: "Cognosys Inc. Magento on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8AE8-CCEC-2355",
			serviceId: "8AE8-CCEC-2355",
			displayName: "Google Click to Deploy HAProxy",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8B17-AF9D-E91C",
			serviceId: "8B17-AF9D-E91C",
			displayName: "Informatica Enterprise Data Catalog 10.5.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8B33-550D-C65C",
			serviceId: "8B33-550D-C65C",
			displayName:
				"Cloud Infrastructure Services DNS Server Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8B5D-EF7D-EB12",
			serviceId: "8B5D-EF7D-EB12",
			displayName: "Cloud Build",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8B79-4813-6F96",
			serviceId: "8B79-4813-6F96",
			displayName:
				"Cisco Systems Cisco Cloud Services Router 1000V - 17.3 - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8B81-5DB3-D563",
			serviceId: "8B81-5DB3-D563",
			displayName: "Enterprise Agreement",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8B9F-E8FF-D111",
			serviceId: "8B9F-E8FF-D111",
			displayName: "JFrog test-jfrog-isaas-test",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8BD3-A8EC-99F3",
			serviceId: "8BD3-A8EC-99F3",
			displayName: "Bitnami Memcached Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8BD7-2B51-6D52",
			serviceId: "8BD7-2B51-6D52",
			displayName:
				"Cisco Systems Cisco Catalyst 9800-CL Wireless Controller for Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8BE4-6E82-080C",
			serviceId: "8BE4-6E82-080C",
			displayName: "Etrans Lab File Manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8BFB-22FE-0BF5",
			serviceId: "8BFB-22FE-0BF5",
			displayName:
				"JFrog Test - JFrog Enterprise+ (Complete DevOps Platform) -Test",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8C20-EB9B-D9FF",
			serviceId: "8C20-EB9B-D9FF",
			displayName: "Tempered Networks Conductor v2.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8C24-874C-F665",
			serviceId: "8C24-874C-F665",
			displayName: "Zadara Cube - 10TB Block and File Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8C2F-F393-55EA",
			serviceId: "8C2F-F393-55EA",
			displayName: "CARTODB Inc. carto-enterprise-payg",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8C63-5529-2F39",
			serviceId: "8C63-5529-2F39",
			displayName: "Miri Infotech Coppermine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8CAB-70B6-4D50",
			serviceId: "8CAB-70B6-4D50",
			displayName:
				"Silk technologies Inc. Silk Data Platform - 3 compute nodes",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8CD0-2A17-0B05",
			serviceId: "8CD0-2A17-0B05",
			displayName: "Cloud Video Intelligence API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8CF0-158B-4556",
			serviceId: "8CF0-158B-4556",
			displayName: "Harness, Inc. Harness Continuous Efficiency",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8D06-D3BD-3DFC",
			serviceId: "8D06-D3BD-3DFC",
			displayName: "Google Click to Deploy Magento",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8D1F-8803-31A6",
			serviceId: "8D1F-8803-31A6",
			displayName: "Miri Infotech Bugzilla-MPL-v-5-0-6-04-08-2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8D1F-AEF7-84B8",
			serviceId: "8D1F-AEF7-84B8",
			displayName: "Pumpkin DB pumpkin-saas-payg-sku-write",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8DB6-593A-DE29",
			serviceId: "8DB6-593A-DE29",
			displayName: "Suki AI suki-ai",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8E16-A5D7-AA86",
			serviceId: "8E16-A5D7-AA86",
			displayName:
				"JFrog Test - JFrog Enterprise: Artifacts, DevSecOps & CI/CD - Test",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8E39-B122-97BC",
			serviceId: "8E39-B122-97BC",
			displayName: "Tempered Networks HIPswitch v2.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8E42-2A16-0E95",
			serviceId: "8E42-2A16-0E95",
			displayName: "Bitnami Spree Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8E43-F646-4E40",
			serviceId: "8E43-F646-4E40",
			displayName: "Google Click to Deploy Ghost",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8E47-5973-FFFA",
			serviceId: "8E47-5973-FFFA",
			displayName: "Authentic8 Silo for Research",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8E72-6AEF-08D5",
			serviceId: "8E72-6AEF-08D5",
			displayName:
				"Cognosys Inc. Gitlab Community Edition With Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8EAC-F496-5637",
			serviceId: "8EAC-F496-5637",
			displayName:
				"Google Cloud Platform Apigee team Apigee Developer Portal",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8EB1-E868-DEEB",
			serviceId: "8EB1-E868-DEEB",
			displayName:
				"Cognosys Inc. Secured SQL Server 2012 Standard on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8ECA-9265-15B7",
			serviceId: "8ECA-9265-15B7",
			displayName: "TigerGraph Inc. TigerGraph Developer Edition 2.5.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8F50-A221-2761",
			serviceId: "8F50-A221-2761",
			displayName: "Cognosys Inc. Espocrm on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8F5B-B6A8-ACCB",
			serviceId: "8F5B-B6A8-ACCB",
			displayName: "Metadot Mojo Helpdesk",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8F72-B6E2-E39A",
			serviceId: "8F72-B6E2-E39A",
			displayName: "Qtum Chain Foundation Unita compute engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8FB8-9DC6-F51C",
			serviceId: "8FB8-9DC6-F51C",
			displayName: "Retail API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8FC4-8F1C-6E2E",
			serviceId: "8FC4-8F1C-6E2E",
			displayName: "Atos dbhotel sandbox Atos Database hotel for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/8FE9-EF04-C483",
			serviceId: "8FE9-EF04-C483",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 2.6.3 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/906C-BBCC-6CE0",
			serviceId: "906C-BBCC-6CE0",
			displayName: "Prime Packaging Wordpress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9090-18FB-504F",
			serviceId: "9090-18FB-504F",
			displayName: "Cognosys Inc. Secured Limesurvey on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/90A5-466E-41D7",
			serviceId: "90A5-466E-41D7",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse ORIGAMI | Oak Ridge Graph Analytics for Medical Innovation",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/90AA-10DF-9487",
			serviceId: "90AA-10DF-9487",
			displayName: "Bitnami Phabricator Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/90C6-4427-4FCD",
			serviceId: "90C6-4427-4FCD",
			displayName:
				"Cloud Infrastructure Services Docker Compose Server on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/90C7-8E95-501F",
			serviceId: "90C7-8E95-501F",
			displayName: "Heimdall Data heimdall-proxy-standard",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/912E-367E-C9F5",
			serviceId: "912E-367E-C9F5",
			displayName: "OpsRamp Inc. OpsRamp Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9134-9573-BDDF",
			serviceId: "9134-9573-BDDF",
			displayName: "Miri Infotech iTop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/915B-0046-19C7",
			serviceId: "915B-0046-19C7",
			displayName: "Bitnami Coppermine Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9161-3322-00C6",
			serviceId: "9161-3322-00C6",
			displayName: "NGINX, Inc NGINX Plus Developer - Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/916B-6EDD-25AE",
			serviceId: "916B-6EDD-25AE",
			displayName: "Miri Infotech sentrifugo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9186-F79E-3871",
			serviceId: "9186-F79E-3871",
			displayName: "Anthos / GDC-V",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/91FD-2945-F609",
			serviceId: "91FD-2945-F609",
			displayName: "Snapt Inc Snapt Aria v2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9208-3D32-4342",
			serviceId: "9208-3D32-4342",
			displayName: "Street View Static API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/9233-D26F-F077",
			serviceId: "9233-D26F-F077",
			displayName:
				"Cloud Infrastructure Services NFS 2019 Windows Storage File Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/925E-85C7-9463",
			serviceId: "925E-85C7-9463",
			displayName: "Spotinst",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/927F-6A9E-AA75",
			serviceId: "927F-6A9E-AA75",
			displayName: "Bitnami Open Atrium Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/927F-9ECA-9C68",
			serviceId: "927F-9ECA-9C68",
			displayName:
				"Cisco Systems Cisco Catalyst 9800-CL Wireless Controller for Cloud - 16.12.2s",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/92A6-B867-1D4C",
			serviceId: "92A6-B867-1D4C",
			displayName: "Cognosys Inc. Secured MySQL 5.6 on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/92B5-8AF7-F17B",
			serviceId: "92B5-8AF7-F17B",
			displayName: "Miri Infotech schlix-cms-v-2-2-7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9327-8361-1E48",
			serviceId: "9327-8361-1E48",
			displayName: "Google Click to Deploy Liferay",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/936F-AA36-4A91",
			serviceId: "936F-AA36-4A91",
			displayName: "Exasol Analytics Database PAYG",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9371-4B16-F1BA",
			serviceId: "9371-4B16-F1BA",
			displayName: "Bitnami Live Helper Chat Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/93B7-7C0C-2BC0",
			serviceId: "93B7-7C0C-2BC0",
			displayName: "Panzura Inc. Panzura Cloud Block Store",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/93C5-1831-A65E",
			serviceId: "93C5-1831-A65E",
			displayName: "Cognosys Inc. PostgreSQL with Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/93E3-9FF0-2204",
			serviceId: "93E3-9FF0-2204",
			displayName: "Infoworks.io, Inc. Infoworks",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/93F1-5236-4CC6",
			serviceId: "93F1-5236-4CC6",
			displayName: "Cognosys Inc. Mantis on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9407-122B-A7B6",
			serviceId: "9407-122B-A7B6",
			displayName: "Versa Networks Inc Versa Operating System",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/942D-F142-6796",
			serviceId: "942D-F142-6796",
			displayName: "Miri Infotech Codeigniter",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9448-01CA-5004",
			serviceId: "9448-01CA-5004",
			displayName: "Firstlight Media Transcoder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/94EA-5A36-C685",
			serviceId: "94EA-5A36-C685",
			displayName: "Bitnami Cassandra Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/94FE-A6D6-659C",
			serviceId: "94FE-A6D6-659C",
			displayName: "Frontline Red Hat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9500-B089-9EA5",
			serviceId: "9500-B089-9EA5",
			displayName:
				"FlashGrid Inc. RHEL 8 Image for FlashGrid Cloud Cluster with Oracle RAC",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9501-987F-84F0",
			serviceId: "9501-987F-84F0",
			displayName: "BigQuery Data Transfer Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9507-4A3D-9555",
			serviceId: "9507-4A3D-9555",
			displayName: "MongoDB - gcp-marketplace-stage Atlas-Pro",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9526-12F3-667B",
			serviceId: "9526-12F3-667B",
			displayName: "Techlatest.net Ripple Development & Training Suit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/953F-1058-B19C",
			serviceId: "953F-1058-B19C",
			displayName:
				"Cisco Systems Cisco Cloud Services Router 1000V - 17.2.1r - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9554-43B1-1A50",
			serviceId: "9554-43B1-1A50",
			displayName:
				"Cognosys Inc. MediaWiki on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9567-9A94-E711",
			serviceId: "9567-9A94-E711",
			displayName: "Frontline Hardened CentOS 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/95A7-6BFB-4B1E",
			serviceId: "95A7-6BFB-4B1E",
			displayName: "Cisco Systems Catalyst 8000V Edge Software - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/95A8-6402-6246",
			serviceId: "95A8-6402-6246",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/95A8-75F7-BA4E",
			serviceId: "95A8-75F7-BA4E",
			displayName: "Trifacta-staging Clouddataprep by Trifacta - Staging",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/95AE-29CB-CEC2",
			serviceId: "95AE-29CB-CEC2",
			displayName: "ISaaS Producer Google Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/95FD-DB15-FA5A",
			serviceId: "95FD-DB15-FA5A",
			displayName:
				"Denodo Technologies Inc. Denodo Standard 8.0 VDP on Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/95FF-2EF5-5EA1",
			serviceId: "95FF-2EF5-5EA1",
			displayName: "Cloud Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9649-7CCF-197B",
			serviceId: "9649-7CCF-197B",
			displayName: "Grakn Labs Grakn KGMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/965E-E4CF-21C8",
			serviceId: "965E-E4CF-21C8",
			displayName: "Bitnami Mahara Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9662-B51E-5089",
			serviceId: "9662-B51E-5089",
			displayName: "Cloud SQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/96BE-D275-C804",
			serviceId: "96BE-D275-C804",
			displayName: "Miri Infotech Resourcespace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/96C2-B131-EA62",
			serviceId: "96C2-B131-EA62",
			displayName: "DataStax Astra for Apache Cassandra (Beta)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/96CC-4DB6-2EBF",
			serviceId: "96CC-4DB6-2EBF",
			displayName: "Citrix Systems, Inc. ADM Onprem Agent",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/96FC-5DC0-DDB6",
			serviceId: "96FC-5DC0-DDB6",
			displayName: "Cognosys Inc. Secured Umbraco CMS on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9706-C845-9EFE",
			serviceId: "9706-C845-9EFE",
			displayName:
				"Cloud Infrastructure Services ADFS Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9743-BDFC-3078",
			serviceId: "9743-BDFC-3078",
			displayName: "Informatica Enterprise Data Catalog 10.4.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/976B-0371-141F",
			serviceId: "976B-0371-141F",
			displayName:
				'Cloud Infrastructure Services Debian 10 "Buster" Server',
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/97A1-67DC-7018",
			serviceId: "97A1-67DC-7018",
			displayName: "Miri Infotech GO LANGUAGE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/97C3-5FC1-5C7E",
			serviceId: "97C3-5FC1-5C7E",
			displayName: "TYMLEZ Inc. TBSP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/97F5-D8FE-BB87",
			serviceId: "97F5-D8FE-BB87",
			displayName: "Miri Infotech Dotclear",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/985F-6DB4-8857",
			serviceId: "985F-6DB4-8857",
			displayName:
				"Cognosys Inc. SQL Server 2017 Enterprise on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9864-1438-35FA",
			serviceId: "9864-1438-35FA",
			displayName: "Twinword Inc. Category Recommendation API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9866-D980-657B",
			serviceId: "9866-D980-657B",
			displayName:
				"Google Click to Deploy Migrate for Compute Engine (formerly Velostrata)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9888-2281-D652",
			serviceId: "9888-2281-D652",
			displayName: "Cognosys Inc. CrushFTP on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/98B0-7948-5743",
			serviceId: "98B0-7948-5743",
			displayName:
				"Cloud Infrastructure Services hMail Mail Server Windows 2019 (IMAP, SMTP, POP3)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/98BE-003B-C43E",
			serviceId: "98BE-003B-C43E",
			displayName: "Google Click to Deploy Redis",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/98C8-E87F-8C3F",
			serviceId: "98C8-E87F-8C3F",
			displayName:
				"Cloud Infrastructure Services MariaDB Server on Ubuntu 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/98E9-C1C8-2C62",
			serviceId: "98E9-C1C8-2C62",
			displayName:
				"Cognosys Inc. Secured Sharepoint 2013 Enterprise on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9942-D767-DC5C",
			serviceId: "9942-D767-DC5C",
			displayName:
				"Palo Alto Networks, Inc. VM-Series Next-Generation Firewall (BYOL and ELA)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9948-2FED-FE82",
			serviceId: "9948-2FED-FE82",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse Intelligent Video Analytics VM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/99C8-DA1D-7384",
			serviceId: "99C8-DA1D-7384",
			displayName: "Actifio Sky",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/99DF-D805-7516",
			serviceId: "99DF-D805-7516",
			displayName:
				"End-to-end Testing Cloud Marketplace Test VM Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9A03-AE58-B047",
			serviceId: "9A03-AE58-B047",
			displayName:
				"Cognosys Inc. Secured SQL Server 2016 Web on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9A12-2448-7BF4",
			serviceId: "9A12-2448-7BF4",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 8 Benchmark - Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9A78-CF83-8ACE",
			serviceId: "9A78-CF83-8ACE",
			displayName: "Bitnami NGINX Open Source Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9A7E-C29A-3CFD",
			serviceId: "9A7E-C29A-3CFD",
			displayName:
				"CIS (Center for Internet Security) CIS CentOS Linux 7 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9AB0-2DCE-24BE",
			serviceId: "9AB0-2DCE-24BE",
			displayName: "NGINX, Inc NGINX Plus Enterprise - Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9ADC-68D4-B368",
			serviceId: "9ADC-68D4-B368",
			displayName: "Google Click to Deploy Matomo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9AE8-AD0D-107A",
			serviceId: "9AE8-AD0D-107A",
			displayName: "TigerGraph Inc. tigergraph-developer-edition-2-5-3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9B82-7513-9D1C",
			serviceId: "9B82-7513-9D1C",
			displayName: "Stackdriver Trace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9B8F-0ABC-AD60",
			serviceId: "9B8F-0ABC-AD60",
			displayName: "Pluto7 Logistic ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9BC8-1C6A-599D",
			serviceId: "9BC8-1C6A-599D",
			displayName: "PerimeterX PerimeterX Bot Defender",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9BE3-CC10-565D",
			serviceId: "9BE3-CC10-565D",
			displayName:
				"CIS (Center for Internet Security) CIS CentOS Linux 8 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C0B-DCF0-DF32",
			serviceId: "9C0B-DCF0-DF32",
			displayName:
				"Pulse Secure, LLC Traffic Manager Essential Edition - 100 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C10-2392-03D8",
			serviceId: "9C10-2392-03D8",
			displayName:
				"Cloud Infrastructure Services Apache Cassandra Cluster on CentOS Server 8.4",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C16-5F3E-7270",
			serviceId: "9C16-5F3E-7270",
			displayName: "Grakn Labs BioGrakn",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C2D-ED8D-176A",
			serviceId: "9C2D-ED8D-176A",
			displayName: "Cognosys Inc. Docker CE With Centos 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C2E-5AAC-D058",
			serviceId: "9C2E-5AAC-D058",
			displayName: "Cloud Memorystore for Memcached",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C38-5153-8125",
			serviceId: "9C38-5153-8125",
			displayName: "GitLab Enterprise Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C84-ADE9-D5BF",
			serviceId: "9C84-ADE9-D5BF",
			displayName: "Miri Infotech JOOMLA",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C86-2A17-A418",
			serviceId: "9C86-2A17-A418",
			displayName: "Miri Infotech e107",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9C87-5BCE-65DD",
			serviceId: "9C87-5BCE-65DD",
			displayName: "Storage Insights",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9CCE-0B8E-BD93",
			serviceId: "9CCE-0B8E-BD93",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Standard Edition - 5 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9D03-633A-0524",
			serviceId: "9D03-633A-0524",
			displayName:
				"NVIDIA Image for AI using GPUs - Optimized for PyTorch",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9D7B-3C82-FC75",
			serviceId: "9D7B-3C82-FC75",
			displayName: "Lightbend Inc. Cloudflow",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9D7E-B781-4B1A",
			serviceId: "9D7E-B781-4B1A",
			displayName: "Speaker ID",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9D9A-46AA-5FA5",
			serviceId: "9D9A-46AA-5FA5",
			displayName: "Hammerspace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9DAC-61E7-86C3",
			serviceId: "9DAC-61E7-86C3",
			displayName: "Cognosys Inc. Django on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9DB9-41E9-D2FE",
			serviceId: "9DB9-41E9-D2FE",
			displayName: "Evidian SafeKit Farm Cluster on Windows",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9DCC-EE36-1563",
			serviceId: "9DCC-EE36-1563",
			displayName:
				"Juniper Networks Inc. vSRX Next Generation Firewall with Anti-Virus Protection",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9DD8-F313-0C12",
			serviceId: "9DD8-F313-0C12",
			displayName:
				"Cognosys Inc. Secured BeYourMarket on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9E1F-97CC-9A45",
			serviceId: "9E1F-97CC-9A45",
			displayName: "Cognosys Inc. MANTIS on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9E24-51DA-516E",
			serviceId: "9E24-51DA-516E",
			displayName:
				"OmniSci, Inc. OmniSci Platform Enterprise Edition - V100",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9E2D-8362-D2B6",
			serviceId: "9E2D-8362-D2B6",
			displayName:
				"NETSCOUT Systems, Inc. NETSCOUT Application Performance Management for GCP - vSTREAM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9E4B-D5BD-9339",
			serviceId: "9E4B-D5BD-9339",
			displayName: "Cognosys Inc. Cakephp on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9E4E-723B-93DF",
			serviceId: "9E4E-723B-93DF",
			displayName: "Google Click to Deploy Weblate",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9ECC-298A-7447",
			serviceId: "9ECC-298A-7447",
			displayName:
				"Cloud Infrastructure Services Redis Server on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9EDF-2107-34CA",
			serviceId: "9EDF-2107-34CA",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9EEC-FF98-40B8",
			serviceId: "9EEC-FF98-40B8",
			displayName: "Bitnami Roundcube Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9F34-C20A-7E12",
			serviceId: "9F34-C20A-7E12",
			displayName: "Aparavi Aparavi Active Archive",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9F3B-4ED4-DEC1",
			serviceId: "9F3B-4ED4-DEC1",
			displayName:
				"Cloud Infrastructure Services RADIUS 2019 Server - Wireless Authentication NPS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9FA8-FC4A-6897",
			serviceId: "9FA8-FC4A-6897",
			displayName: "Kissflow Digital Workplace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9FBE-3CD7-37DD",
			serviceId: "9FBE-3CD7-37DD",
			displayName: "Fluid Numerics Fluid-Slurm-GCP (Ubuntu)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/9FFF-9C0B-9F2D",
			serviceId: "9FFF-9C0B-9F2D",
			displayName: "Ontology ont_dev_platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A009-7B3D-36B3",
			serviceId: "A009-7B3D-36B3",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 8.2 (v20200715)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A01D-6876-60A3",
			serviceId: "A01D-6876-60A3",
			displayName: "Pivotal Software, Inc. Pivotal Postgres",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A02A-EFEA-2C2D",
			serviceId: "A02A-EFEA-2C2D",
			displayName: "Dataiku",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A041-B732-93B4",
			serviceId: "A041-B732-93B4",
			displayName: "ANALOG INDUSTRIES LLP Accelerated Ghost",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A046-AC92-8D09",
			serviceId: "A046-AC92-8D09",
			displayName: "H2O.ai H2O-3 Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A05E-702D-F68A",
			serviceId: "A05E-702D-F68A",
			displayName: "MatosSphere",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A06E-F76E-668F",
			serviceId: "A06E-F76E-668F",
			displayName: "Cognosys Inc. Drupal With Ubuntu Server 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A077-5926-D8BA",
			serviceId: "A077-5926-D8BA",
			displayName:
				"Plesk on Ubuntu - Licensed - Website & WordPress Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A0C0-A10B-4448",
			serviceId: "A0C0-A10B-4448",
			displayName: "Computerlogy SocialEnable",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A0F5-2E03-A25B",
			serviceId: "A0F5-2E03-A25B",
			displayName: "Informatica Intelligent Cloud Services Secure Agent",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A0F6-E70F-B17C",
			serviceId: "A0F6-E70F-B17C",
			displayName: "Google Click to Deploy Pimcore",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A18B-E573-B019",
			serviceId: "A18B-E573-B019",
			displayName: "Cloud Document API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A1CC-A521-0B43",
			serviceId: "A1CC-A521-0B43",
			displayName: "Cognosys Inc. Tiny Tiny RSS on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A1E4-1DBC-2928",
			serviceId: "A1E4-1DBC-2928",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 14.04 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A1E8-BE35-7EBC",
			serviceId: "A1E8-BE35-7EBC",
			displayName: "Cloud Pub/Sub",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A1F4-1B78-E915",
			serviceId: "A1F4-1B78-E915",
			displayName: "Rollbar",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A21D-A58B-8FFF",
			serviceId: "A21D-A58B-8FFF",
			displayName: "Miri Infotech Processwire",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A22A-E5D7-B6FF",
			serviceId: "A22A-E5D7-B6FF",
			displayName: "DataStax Astra DB for Apache Cassandra",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A24D-CCD0-09CD",
			serviceId: "A24D-CCD0-09CD",
			displayName: "Bitnami MongoDB Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A24D-EF9D-2F67",
			serviceId: "A24D-EF9D-2F67",
			displayName: "Programmable Search Element",
			businessEntityName: "",
		},
		{
			name: "services/A260-4BD2-C369",
			serviceId: "A260-4BD2-C369",
			displayName:
				"Cloud Infrastructure Services RabbitMQ Server on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A28C-3A40-92ED",
			serviceId: "A28C-3A40-92ED",
			displayName: "Miri Infotech METABASE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A29C-002B-558D",
			serviceId: "A29C-002B-558D",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2012 R2 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A2E5-0CB0-7808",
			serviceId: "A2E5-0CB0-7808",
			displayName: "NGINX, Inc NGINX Plus - CentOS 7 Standard",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A2E8-4B92-881E",
			serviceId: "A2E8-4B92-881E",
			displayName: "Jetware WordPress on LEMP 7 Max Performance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A2E8-CB50-67E7",
			serviceId: "A2E8-CB50-67E7",
			displayName: "TigerGraph Inc. TigerGraph Developer Edition 2-6-1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A2FD-8397-DE2A",
			serviceId: "A2FD-8397-DE2A",
			displayName: "Miri Infotech DRUPAL8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A327-7DE8-D99B",
			serviceId: "A327-7DE8-D99B",
			displayName: "R-Brain Inc Enterprise Data Science Platform (DSP S)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A34C-B4CE-0D3C",
			serviceId: "A34C-B4CE-0D3C",
			displayName: "Arista Networks Inc. vEOS Router",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A368-396E-EF7F",
			serviceId: "A368-396E-EF7F",
			displayName: "Pivotal Software, Inc. VMware Tanzu Greenplum Hourly",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A377-C5FA-7F22",
			serviceId: "A377-C5FA-7F22",
			displayName: "Bitnami Akeneo Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A3D0-A1C2-E18D",
			serviceId: "A3D0-A1C2-E18D",
			displayName: "MongoDB Inc. MongoDB Atlas",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A420-B599-D6C0",
			serviceId: "A420-B599-D6C0",
			displayName: "demo-oct2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A475-2564-63A2",
			serviceId: "A475-2564-63A2",
			displayName: "Twinword Inc. Keyword Suggestion API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A4AE-00F7-CCF9",
			serviceId: "A4AE-00F7-CCF9",
			displayName:
				"Cognosys Inc. Secured Tiki Wiki CMS on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A4E8-8129-69F3",
			serviceId: "A4E8-8129-69F3",
			displayName: "Cognosys Inc. AlmaLinux  8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A503-12FC-509D",
			serviceId: "A503-12FC-509D",
			displayName: "Bitnami SuiteCRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A529-BD9E-F050",
			serviceId: "A529-BD9E-F050",
			displayName:
				"Cloud Infrastructure Services HPC Pack 2019 Cluster on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A531-D13B-B766",
			serviceId: "A531-D13B-B766",
			displayName: "Pluto7 Inventory ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A535-C417-5C52",
			serviceId: "A535-C417-5C52",
			displayName: "MYFUNDBOX Payments",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A59B-BFC3-46AD",
			serviceId: "A59B-BFC3-46AD",
			displayName: "Liquidware Stratusphere UX Database (6.1.5)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A5C7-074F-5AE5",
			serviceId: "A5C7-074F-5AE5",
			displayName: "Cognosys Inc. Ghost on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A5C8-FA71-65F7",
			serviceId: "A5C8-FA71-65F7",
			displayName:
				"Jelastic PaaS Light Edition Jelastic PaaS Lite Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A5D1-E119-C4FB",
			serviceId: "A5D1-E119-C4FB",
			displayName: "Miri Infotech FrontAccounting",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A5D8-620B-BAB1",
			serviceId: "A5D8-620B-BAB1",
			displayName: "Citrix Systems, Inc. Citrix SD-WAN Standard Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A5D8-B494-7EC3",
			serviceId: "A5D8-B494-7EC3",
			displayName:
				"Cognosys Inc. Secured SQuirreL SQL on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A603-C604-CF0E",
			serviceId: "A603-C604-CF0E",
			displayName: "Aiven for Apache Kafka MirrorMaker 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A608-CF49-BE36",
			serviceId: "A608-CF49-BE36",
			displayName: "Arista Networks Inc. cloudeos-router-byol",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A61E-D16C-A1D1",
			serviceId: "A61E-D16C-A1D1",
			displayName: "MongoDB Atlas GCP Free",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A638-53D0-3F95",
			serviceId: "A638-53D0-3F95",
			displayName:
				"Cloud Infrastructure Services Docker Compose Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A642-A42B-4E2B",
			serviceId: "A642-A42B-4E2B",
			displayName:
				"Cognosys Inc. Secured SQL Server 2017 Web on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A655-1EE9-24FC",
			serviceId: "A655-1EE9-24FC",
			displayName: "Google Click to Deploy Ethereum",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A668-ABC5-9B82",
			serviceId: "A668-ABC5-9B82",
			displayName: "Etrans Lab Airtable",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A6B0-138D-9EBF",
			serviceId: "A6B0-138D-9EBF",
			displayName: "LiteSpeed Technologies-public OpenLiteSpeed Django",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A6FE-0C2C-007E",
			serviceId: "A6FE-0C2C-007E",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Premium Edition - 200 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A706-D083-2377",
			serviceId: "A706-D083-2377",
			displayName: "Pluto7 Returns ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A79C-AC00-EE19",
			serviceId: "A79C-AC00-EE19",
			displayName: "Prime Packaging Ethereum Parity Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A7C3-CC71-FD33",
			serviceId: "A7C3-CC71-FD33",
			displayName: "Wallarm - Next-Gen Web Application Firewall (WAF)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A7E4-D2FF-3BA5",
			serviceId: "A7E4-D2FF-3BA5",
			displayName: "NGINX, Inc NGINX Plus Enterprise - RHEL 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A860-874E-CE41",
			serviceId: "A860-874E-CE41",
			displayName:
				"F5 Networks F5 Per-App VE  BIG-IP LTM  (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A87F-D283-E763",
			serviceId: "A87F-D283-E763",
			displayName: "Cognosys Inc. Secured MySQL 5.7 on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A884-031F-CD3C",
			serviceId: "A884-031F-CD3C",
			displayName:
				"Fortinet Inc. Fortinet FortiADC Application Delivery Controller PAYG 500Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A888-2643-325E",
			serviceId: "A888-2643-325E",
			displayName: "Cognosys Inc. Clamwin Antivirus on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A8EF-9B35-F03E",
			serviceId: "A8EF-9B35-F03E",
			displayName: "CloudBolt",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A8F0-6B28-1A00",
			serviceId: "A8F0-6B28-1A00",
			displayName: "Datametica Solutions Pvt. Ltd Pelican",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A8F5-B709-459E",
			serviceId: "A8F5-B709-459E",
			displayName:
				"NGINX, Inc NGINX Plus with NGINX App Protect - Premium (RHEL 7)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A90C-7E50-120A",
			serviceId: "A90C-7E50-120A",
			displayName: "Prime Packaging open-ethereum",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A90F-35BF-9175",
			serviceId: "A90F-35BF-9175",
			displayName: "velospublic velostrata",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A971-111B-D70E",
			serviceId: "A971-111B-D70E",
			displayName: "pricing tester with usage only",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A97C-594D-C6AB",
			serviceId: "A97C-594D-C6AB",
			displayName: "Google Click to Deploy Joomla!",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A99C-FB9A-7F5C",
			serviceId: "A99C-FB9A-7F5C",
			displayName: "End-to-end Testing Kubernetes test solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A9A5-163C-8ED5",
			serviceId: "A9A5-163C-8ED5",
			displayName: "ElectrifAi LLC SpendAi",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A9BD-FD2B-0E45",
			serviceId: "A9BD-FD2B-0E45",
			displayName: "Infogix, Inc Data360 Analyze - Hourly Paid",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A9C3-C595-CA93",
			serviceId: "A9C3-C595-CA93",
			displayName: "Pixit Media PixStor Cloud Solo - 20 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A9C9-21F9-3BDB",
			serviceId: "A9C9-21F9-3BDB",
			displayName: "Sylabs, Inc SingularityPRO-25",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/A9EE-5643-1C0F",
			serviceId: "A9EE-5643-1C0F",
			displayName: "Miri Infotech FLATCORE CMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AA1E-78BC-757F",
			serviceId: "AA1E-78BC-757F",
			displayName:
				"Dace IT d/b/a Sense Traffic Pulse Dace ITwith Intel OpenVINO Intelligent Traffic Management 2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AA51-DD00-0D8F",
			serviceId: "AA51-DD00-0D8F",
			displayName: "Aiven Managed Database Services",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AA68-8006-2C93",
			serviceId: "AA68-8006-2C93",
			displayName: "Techlatest.net tensorflow-prod-dev-kit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AAAE-042A-93A7",
			serviceId: "AAAE-042A-93A7",
			displayName:
				"Techlatest.net Cloud IDE for Python using Jupyter & Visual Studio Code",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AAC1-2094-4E61",
			serviceId: "AAC1-2094-4E61",
			displayName:
				"Cognosys Inc. Visual Studio 2015 Community on Hardened Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AAF2-79DA-324C",
			serviceId: "AAF2-79DA-324C",
			displayName: "Miri Infotech TIKI WIKI",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AB0F-496F-FE96",
			serviceId: "AB0F-496F-FE96",
			displayName: "Codefresh",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AB1F-6E1A-E9EF",
			serviceId: "AB1F-6E1A-E9EF",
			displayName: "Striim Inc. Real-Time Integration to Cloud Spanner",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AB4B-4E1F-38EB",
			serviceId: "AB4B-4E1F-38EB",
			displayName: "CLOUDUP INFOTECH PRIVATE LIMITED Advance CyberPanel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AB54-01CC-8821",
			serviceId: "AB54-01CC-8821",
			displayName: "Miri Infotech PHPfusion",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AB58-81D8-F401",
			serviceId: "AB58-81D8-F401",
			displayName: "Miri Infotech ATutor",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AB87-32E0-2096",
			serviceId: "AB87-32E0-2096",
			displayName: "Bitnami TestLink Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ABAE-F726-7D23",
			serviceId: "ABAE-F726-7D23",
			displayName: "Silver Peak Network Silver Peak Unity EdgeConnect",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ABFC-2AC7-37DF",
			serviceId: "ABFC-2AC7-37DF",
			displayName: "Heimdall Data heimdall-proxy-enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AC10-B2C7-365B",
			serviceId: "AC10-B2C7-365B",
			displayName: "DDN Storage EXAScaler Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AC2F-4847-6E66",
			serviceId: "AC2F-4847-6E66",
			displayName: "Bitnami PrestaShop Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AC42-D757-3EDF",
			serviceId: "AC42-D757-3EDF",
			displayName: "Miri Infotech OsCommerce",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AC46-C212-7331",
			serviceId: "AC46-C212-7331",
			displayName: "Cameyo Inc Cameyo",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AC5C-E663-073E",
			serviceId: "AC5C-E663-073E",
			displayName:
				"Cloud Infrastructure Services LAMP Stack Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ACD9-BEB4-F950",
			serviceId: "ACD9-BEB4-F950",
			displayName: "NKN.org NKN Full Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ACDC-687D-DA41",
			serviceId: "ACDC-687D-DA41",
			displayName:
				"Cloud Infrastructure Services Nodejs Server on CentOS Server 8.4",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AD70-6E91-45A9",
			serviceId: "AD70-6E91-45A9",
			displayName: "Atomicorp OSSEC Open-Source",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AD74-09F0-CDF1",
			serviceId: "AD74-09F0-CDF1",
			displayName: "USAN Dialogflow Enterprise Telephony Gateway",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ADA4-0368-578C",
			serviceId: "ADA4-0368-578C",
			displayName: "Jetware AISE TensorFlow NVidia GPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ADE7-8DB3-E069",
			serviceId: "ADE7-8DB3-E069",
			displayName: "Genymotion Cloud: Android 5.1 (lollipop)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE05-9A48-597D",
			serviceId: "AE05-9A48-597D",
			displayName: "Striim Inc. STRIIM ( metered )",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE07-285E-7080",
			serviceId: "AE07-285E-7080",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 7 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE39-440E-8EB5",
			serviceId: "AE39-440E-8EB5",
			displayName:
				"CIS (Center for Internet Security) CIS SUSE Linux Enterprise Server 11 Benchmark v2.0.0 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE54-F018-D8C6",
			serviceId: "AE54-F018-D8C6",
			displayName:
				"InterSystems Corporation Intersystems IRIS Express Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE5D-F62D-F745",
			serviceId: "AE5D-F62D-F745",
			displayName: "Pluto7 Demand ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE6F-C82F-675B",
			serviceId: "AE6F-C82F-675B",
			displayName: "Frontline Ubuntu 18",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE7D-B641-236D",
			serviceId: "AE7D-B641-236D",
			displayName: "Jetware LAMP Stack PHP 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE82-BFB1-BEEE",
			serviceId: "AE82-BFB1-BEEE",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 2.5.3 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AE96-4936-4E11",
			serviceId: "AE96-4936-4E11",
			displayName: "CirrusWave Inc. cirruswave-enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AEBC-5AFC-0AFF",
			serviceId: "AEBC-5AFC-0AFF",
			displayName: "OEMR OpenEMR Launchpad",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AF28-FE1C-02CE",
			serviceId: "AF28-FE1C-02CE",
			displayName: "Miri Infotech TYPO3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AF67-47F1-CC62",
			serviceId: "AF67-47F1-CC62",
			displayName: "ScientiaMobile Inc. WURFL Microservice Professional",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AF68-E2E7-6A07",
			serviceId: "AF68-E2E7-6A07",
			displayName: "Lacework, Inc. Lacework Cloud Security Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AF9A-5F4C-31E5",
			serviceId: "AF9A-5F4C-31E5",
			displayName: "Recommendations AI",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AFA0-BB42-DCD3",
			serviceId: "AFA0-BB42-DCD3",
			displayName: "Parashift AG Parashift Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AFA4-D494-5484",
			serviceId: "AFA4-D494-5484",
			displayName:
				"Cloud Infrastructure Services MariaDB Server on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AFD4-4E26-6CBC",
			serviceId: "AFD4-4E26-6CBC",
			displayName:
				"F5 Networks F5 Per-App VE - Advanced WAF + LTM (PAYG, 200M)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AFD5-0BDF-2F92",
			serviceId: "AFD5-0BDF-2F92",
			displayName:
				"Striim Inc. Real-Time Data Integration to Google Cloud Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/AFEC-1A10-CB15",
			serviceId: "AFEC-1A10-CB15",
			displayName: "Bitnami Kubernetes Sandbox Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B016-888D-2425",
			serviceId: "B016-888D-2425",
			displayName: "Bitnami Codiad Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B022-486A-EFF3",
			serviceId: "B022-486A-EFF3",
			displayName:
				"Varnish Software Inc. Varnish Custom Statistics (Ubuntu)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B059-67E9-59AF",
			serviceId: "B059-67E9-59AF",
			displayName:
				"Cloud Infrastructure Services XAMPP Server + Apache Web Server + MySQL on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B07C-5C9A-88F9",
			serviceId: "B07C-5C9A-88F9",
			displayName: "Cognosys Inc. Hardened Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B105-3FA4-37F2",
			serviceId: "B105-3FA4-37F2",
			displayName: "Google Click to Deploy Mattermost",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B10B-3E7C-EB21",
			serviceId: "B10B-3E7C-EB21",
			displayName: "Miri Infotech Grav",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B114-A969-6354",
			serviceId: "B114-A969-6354",
			displayName:
				"F5 Networks F5 BIG-IP VE  LTM/DNS   (BYOL, 2 Boot Locations)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B122-05DF-82C7",
			serviceId: "B122-05DF-82C7",
			displayName: "Skaffolder Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B172-FDD7-0DBE",
			serviceId: "B172-FDD7-0DBE",
			displayName: "Miri Infotech JENKINS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B18A-193A-B18D",
			serviceId: "B18A-193A-B18D",
			displayName: "CloudBees Jenkins Distribution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B19D-BE0C-322C",
			serviceId: "B19D-BE0C-322C",
			displayName: "Diyotta Data Integration - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B1C2-6403-243D",
			serviceId: "B1C2-6403-243D",
			displayName: "Cognosys Inc. Limesurvey on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B1F7-67A6-84C8",
			serviceId: "B1F7-67A6-84C8",
			displayName: "Unizin Data Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B1F9-A320-E3A5",
			serviceId: "B1F9-A320-E3A5",
			displayName:
				"ANALOG INNOVATION PVT LTD SECURED WORDPRESS ON UBUNTU 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B220-C883-599C",
			serviceId: "B220-C883-599C",
			displayName:
				"Thales CPL Thales CipherTrust Cloud Key Broker for Google - North America",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B23F-0FC2-88B0",
			serviceId: "B23F-0FC2-88B0",
			displayName: "niolabs nio",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B25C-31FA-AD72",
			serviceId: "B25C-31FA-AD72",
			displayName: "Bitnami HHVM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B301-6CFB-F29C",
			serviceId: "B301-6CFB-F29C",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 7 STIG Benchmark",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B314-DF9E-D7F6",
			serviceId: "B314-DF9E-D7F6",
			displayName: "Miri Infotech Moodle",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B31D-B571-6CA5",
			serviceId: "B31D-B571-6CA5",
			displayName: "Infoworks.io, Inc. Infoworks DataFoundry",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B32D-9677-741C",
			serviceId: "B32D-9677-741C",
			displayName: "Miri Infotech oxid-eshop-v6-1-5",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B33A-B04E-3B12",
			serviceId: "B33A-B04E-3B12",
			displayName: "Varnish Software Inc. Varnish Cache 6 (Red Hat)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B33E-F0AF-6964",
			serviceId: "B33E-F0AF-6964",
			displayName:
				"Cognosys Inc. Secured SQL Server 2012 Web on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B348-F16D-7F1D",
			serviceId: "B348-F16D-7F1D",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Advanced Edition - 200 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B359-5705-8BCD",
			serviceId: "B359-5705-8BCD",
			displayName: "Google Click to Deploy LimeSurvey",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B3C4-4767-F8EF",
			serviceId: "B3C4-4767-F8EF",
			displayName: "Google Speech Speech-to-Text On-Prem",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B3CD-EAF6-1FEF",
			serviceId: "B3CD-EAF6-1FEF",
			displayName: "Zoomdata",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B3E2-DEB2-CEFF",
			serviceId: "B3E2-DEB2-CEFF",
			displayName: "On-Demand Scanning",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B3FB-3440-E6EB",
			serviceId: "B3FB-3440-E6EB",
			displayName:
				"FlashGrid Inc. Oracle Linux 7 Image for FlashGrid SkyCluster with Oracle RAC",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B410-FE8A-FEF7",
			serviceId: "B410-FE8A-FEF7",
			displayName: "BlockApps STRATO for Business Networks - Single Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B412-70EB-7647",
			serviceId: "B412-70EB-7647",
			displayName: "OmniSci, Inc. OmniSci Enterprise Edition (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B4AF-259E-7801",
			serviceId: "B4AF-259E-7801",
			displayName: "Gluent Data Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B4FE-07DA-A400",
			serviceId: "B4FE-07DA-A400",
			displayName:
				"Palo Alto Networks, Inc. VM-Series Next-Generation Firewall Bundle 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B52F-5A3D-57A8",
			serviceId: "B52F-5A3D-57A8",
			displayName: "Pluto7 Sales ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B535-ED6D-9507",
			serviceId: "B535-ED6D-9507",
			displayName:
				"Instana - Container & Microservices Monitoring on GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B566-4E24-AC28",
			serviceId: "B566-4E24-AC28",
			displayName: "Twinword Inc. Sentiment Analysis API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B568-E3A8-66F6",
			serviceId: "B568-E3A8-66F6",
			displayName:
				"Cloud Infrastructure Services GeoServer on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B578-1C3B-DCC2",
			serviceId: "B578-1C3B-DCC2",
			displayName: "Vertica Data Warehouse, Eon Mode",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B5D2-681B-5C7D",
			serviceId: "B5D2-681B-5C7D",
			displayName:
				"NGINX, Inc NGINX Plus with NGINX App Protect - Premium (CentOS 7)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B641-A01C-219A",
			serviceId: "B641-A01C-219A",
			displayName: "Etrans Lab WordPress with Redis",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B644-715A-1DB0",
			serviceId: "B644-715A-1DB0",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 7 Benchmark - Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B681-1E96-9DE3",
			serviceId: "B681-1E96-9DE3",
			displayName: "AXI AI Forecast ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6AD-002A-7048",
			serviceId: "B6AD-002A-7048",
			displayName: "Elastic Cloud (managed Elasticsearch Service)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6B0-2483-6FC3",
			serviceId: "B6B0-2483-6FC3",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2016 Benchmark v1.0.0 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6B9-89DB-42A1",
			serviceId: "B6B9-89DB-42A1",
			displayName: "Bitnami MongoDB with Replication",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6D8-1890-2539",
			serviceId: "B6D8-1890-2539",
			displayName: "Cognosys Inc. NGINX on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6F1-C024-8E84",
			serviceId: "B6F1-C024-8E84",
			displayName: "Immersive Stream for XR",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6F3-61EB-F0FA",
			serviceId: "B6F3-61EB-F0FA",
			displayName: "Confluent Dev Confluent Cloud Service Dev",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B6FA-B410-C083",
			serviceId: "B6FA-B410-C083",
			displayName: "Dynatrace LLC Dynatrace Managed Quickstart",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B70C-35F5-A114",
			serviceId: "B70C-35F5-A114",
			displayName:
				"Barracuda Networks, Inc. Barracuda CloudGen Firewall (PAYG)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B70D-D55D-A041",
			serviceId: "B70D-D55D-A041",
			displayName:
				"Occam Technology Group OccamSmart Network Server Stack for LoRaWAN",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B731-7C72-37E0",
			serviceId: "B731-7C72-37E0",
			displayName: "DataStax K8ssandra - Marketplace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B741-0709-2E08",
			serviceId: "B741-0709-2E08",
			displayName: "ScientiaMobile Inc. WURFL Microservice Standard",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B790-DBE2-0726",
			serviceId: "B790-DBE2-0726",
			displayName: "Miri Infotech CASSANDRA",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B79D-494C-2E64",
			serviceId: "B79D-494C-2E64",
			displayName:
				"Cloud Infrastructure Services PostgreSQL Server + pgAdmin on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B7D9-FDCB-15D8",
			serviceId: "B7D9-FDCB-15D8",
			displayName: "Directions API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/B80D-81BC-50DB",
			serviceId: "B80D-81BC-50DB",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2016 STIG Benchmark - Level 3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B81B-A6C1-CA22",
			serviceId: "B81B-A6C1-CA22",
			displayName: "Cognosys Inc. NGINX With CentOS 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B82B-D19C-4B37",
			serviceId: "B82B-D19C-4B37",
			displayName: "DDN Storage Cloud Edition for Lustre",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B84A-D757-5A1F",
			serviceId: "B84A-D757-5A1F",
			displayName:
				"NGINX, Inc NGINX Plus with NGINX App Protect - Premium (Debian 9)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B85F-AB0E-E881",
			serviceId: "B85F-AB0E-E881",
			displayName: "Miri Infotech laravel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B86C-B269-526F",
			serviceId: "B86C-B269-526F",
			displayName: "Julia Computing, Inc. JuliaTeam-v1.1.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B879-8D93-5C7F",
			serviceId: "B879-8D93-5C7F",
			displayName:
				"Cognosys Inc. Visual Studio 2017 Community on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B88E-12FD-0765",
			serviceId: "B88E-12FD-0765",
			displayName: "Google Click to Deploy PrestaShop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B899-77F3-1A7B",
			serviceId: "B899-77F3-1A7B",
			displayName: "Google Click to Deploy PostgreSQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B8BB-F694-6A16",
			serviceId: "B8BB-F694-6A16",
			displayName:
				"Palo Alto Networks, Inc. VM-Series Next-Generation Firewall (Bundle1)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B907-7163-0B08",
			serviceId: "B907-7163-0B08",
			displayName: "Bitnami Neos Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B921-0057-0BCA",
			serviceId: "B921-0057-0BCA",
			displayName: "Zabbix SIA Zabbix Server 5.0 Appliance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B956-6A65-2339",
			serviceId: "B956-6A65-2339",
			displayName: "Bitnami Publify Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B96C-F8F9-92B8",
			serviceId: "B96C-F8F9-92B8",
			displayName: "PerimeterX Code Defender",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/B977-C685-C1B0",
			serviceId: "B977-C685-C1B0",
			displayName: "Neo4j Enterprise 4.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BA20-A681-A486",
			serviceId: "BA20-A681-A486",
			displayName: "Cognosys Inc. CentOS 8.2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BA25-0A25-E7E8",
			serviceId: "BA25-0A25-E7E8",
			displayName:
				"Cloud Infrastructure Services Ansible Control Node Server on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BA25-5303-081D",
			serviceId: "BA25-5303-081D",
			displayName: "Cognosys Inc. Lamp With Ubuntu Server 18.04 Lts",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BA9E-0885-F593",
			serviceId: "BA9E-0885-F593",
			displayName: "Zadara Cube - 40TB Block and File Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BAE3-3DB9-7C32",
			serviceId: "BAE3-3DB9-7C32",
			displayName: "Miri Infotech SERENDIPITY",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BAE4-9668-BD24",
			serviceId: "BAE4-9668-BD24",
			displayName: "Certificate Authority Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BAEC-1C2D-B84F",
			serviceId: "BAEC-1C2D-B84F",
			displayName: "BlockApps STRATO",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BAFF-09F1-395B",
			serviceId: "BAFF-09F1-395B",
			displayName:
				"Cognosys Inc. Secured Orchard Collaboration on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BB00-B246-1559",
			serviceId: "BB00-B246-1559",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BB3D-1760-4085",
			serviceId: "BB3D-1760-4085",
			displayName:
				"Cognosys Inc. Visual Studio Pro 2015 on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BB76-C283-3C55",
			serviceId: "BB76-C283-3C55",
			displayName: "Miri Infotech Omeka",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BBDB-A1ED-7E4F",
			serviceId: "BBDB-A1ED-7E4F",
			displayName: "Miri Infotech redis-v-5-0-7-04-08-2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BBF3-4E26-7935",
			serviceId: "BBF3-4E26-7935",
			displayName:
				"Cloud Infrastructure Services Terraform on Ubuntu 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BC0D-A301-E870",
			serviceId: "BC0D-A301-E870",
			displayName: "Bitnami Kafka Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BC28-0128-8C9B",
			serviceId: "BC28-0128-8C9B",
			displayName: "Video Stitcher API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BC65-6166-90AB",
			serviceId: "BC65-6166-90AB",
			displayName: "Miri Infotech piwigo-08-09-2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BCD8-91B9-A7E4",
			serviceId: "BCD8-91B9-A7E4",
			displayName: "CloudSight Whole Scene Understanding / Captioning",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BCDD-5E80-EBF5",
			serviceId: "BCDD-5E80-EBF5",
			displayName:
				"Cloud Infrastructure Services Nagios Core Monitoring Server on Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BD5A-0194-268E",
			serviceId: "BD5A-0194-268E",
			displayName: "Miri Infotech Kirby",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BD63-C5CD-FC2C",
			serviceId: "BD63-C5CD-FC2C",
			displayName: "Pixit Media PixStor Cloud Solo - 2.5 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BD8D-BECA-E711",
			serviceId: "BD8D-BECA-E711",
			displayName: "Bitnami Weblate Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BDB3-3E42-622F",
			serviceId: "BDB3-3E42-622F",
			displayName: "Trifacta-test Cloud Dataprep by Trifacta",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BDF3-CBDF-4696",
			serviceId: "BDF3-CBDF-4696",
			displayName:
				"Delphix Corp Delphix Data Masking for Google Cloud (3TB)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BDFF-84FA-F7BC",
			serviceId: "BDFF-84FA-F7BC",
			displayName: "Plesk WordPress Edition PREMIUM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BE37-0FCF-2D61",
			serviceId: "BE37-0FCF-2D61",
			displayName: "Ergon Informatik AG Airlock Secure Access Hub",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BE95-3773-64C2",
			serviceId: "BE95-3773-64C2",
			displayName: "NGINX, Inc nginx-plus--rhel8-standard",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BEB8-3320-BE4B",
			serviceId: "BEB8-3320-BE4B",
			displayName: "Miri Infotech Trac-v1-4-x",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BEDC-9F7F-3B4C",
			serviceId: "BEDC-9F7F-3B4C",
			displayName:
				"Rohde & Schwarz Cybersecurity SAS R&SWeb Application Firewall - Pay as you go",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BEF1-125D-A086",
			serviceId: "BEF1-125D-A086",
			displayName: "Bitnami Ruby Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BF3D-4A43-8896",
			serviceId: "BF3D-4A43-8896",
			displayName: "Dicom Systems Workflow Unifier",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BF5A-F7CB-BEEE",
			serviceId: "BF5A-F7CB-BEEE",
			displayName: "Bitnami Fat Free CRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BF63-6EFF-4962",
			serviceId: "BF63-6EFF-4962",
			displayName: "Mountain Fog, Inc. Phirestream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BF8B-4D2F-4E5F",
			serviceId: "BF8B-4D2F-4E5F",
			displayName: "Visulate visulate-for-oracle",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BF91-236C-2A92",
			serviceId: "BF91-236C-2A92",
			displayName: "NGINX, Inc NGINX Plus - RHEL7 Standard",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BFB3-57CC-CA94",
			serviceId: "BFB3-57CC-CA94",
			displayName: "Aerospike Server Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BFD5-8FEE-B742",
			serviceId: "BFD5-8FEE-B742",
			displayName: "Bitnami MediaWiki Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/BFE8-1B50-C523",
			serviceId: "BFE8-1B50-C523",
			displayName: "Miri Infotech plone-08-09-2021",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C001-C139-6771",
			serviceId: "C001-C139-6771",
			displayName: "Cognosys Inc. Secured Jenkins on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C00D-1013-02B1",
			serviceId: "C00D-1013-02B1",
			displayName: "Miri Infotech cube-cart",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C04A-0B58-048A",
			serviceId: "C04A-0B58-048A",
			displayName: "Address Validation API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/C05C-C73D-6EC2",
			serviceId: "C05C-C73D-6EC2",
			displayName: "Cognosys Inc. Lamp With Ubuntu Server 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C060-073E-5D94",
			serviceId: "C060-073E-5D94",
			displayName: "Bitnami Mattermost Team Edition Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C062-0239-35AB",
			serviceId: "C062-0239-35AB",
			displayName:
				"Delphix Corp Delphix Data Virtualization for Google Cloud (3TB)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C073-6AB9-07ED",
			serviceId: "C073-6AB9-07ED",
			displayName: "VOGSY",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C079-64FE-9109",
			serviceId: "C079-64FE-9109",
			displayName: "VMware Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C07F-DB2D-BB31",
			serviceId: "C07F-DB2D-BB31",
			displayName: "Storage Made Easy Enterprise File Fabric",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C082-44C2-29AE",
			serviceId: "C082-44C2-29AE",
			displayName: "Arista Networks Inc. cloudeos-router-payg",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C08E-37B9-80D3",
			serviceId: "C08E-37B9-80D3",
			displayName: "Cloud Vision API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C096-CD96-16B6",
			serviceId: "C096-CD96-16B6",
			displayName: "AXI AI SAP EasyConnect Plus",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C0D8-6BB4-9954",
			serviceId: "C0D8-6BB4-9954",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Premium Edition - 3 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C118-E1E8-63CB",
			serviceId: "C118-E1E8-63CB",
			displayName: "Google Click to Deploy EspoCRM",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C149-C8C3-BC0B",
			serviceId: "C149-C8C3-BC0B",
			displayName: "Ryussi America Inc MoSMB SE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C172-B970-2D54",
			serviceId: "C172-B970-2D54",
			displayName:
				"Cloud Infrastructure Services DNS Server - BIND DNS Server on Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C1A6-F3ED-4071",
			serviceId: "C1A6-F3ED-4071",
			displayName: "Bitnami SonarQube Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C1C3-C0B0-11F1",
			serviceId: "C1C3-C0B0-11F1",
			displayName: "Cognosys Inc. Secured GIMP on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C1DF-C4AD-C3EA",
			serviceId: "C1DF-C4AD-C3EA",
			displayName: "Cognosys Inc. Oxideshop on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C1F4-4081-8121",
			serviceId: "C1F4-4081-8121",
			displayName: "omniX labs omniX Vision | Analyze video in real time",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C208-DF50-7BE0",
			serviceId: "C208-DF50-7BE0",
			displayName: "JFrog test-pro-team-saas-test",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C20A-D4BB-1B33",
			serviceId: "C20A-D4BB-1B33",
			displayName: "F5, Inc f5-big-best-plus-payg-10gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C24D-0FA6-3FE7",
			serviceId: "C24D-0FA6-3FE7",
			displayName: "Kx Systems kdb+ 4.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C24E-26B9-9DED",
			serviceId: "C24E-26B9-9DED",
			displayName: "FastNetMon LTD FastNetMon Advanced",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C250-726E-A553",
			serviceId: "C250-726E-A553",
			displayName: "Time Zone API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/C268-D0AE-52C0",
			serviceId: "C268-D0AE-52C0",
			displayName: "Bitnami Django Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C29D-7E07-7641",
			serviceId: "C29D-7E07-7641",
			displayName: "Bitnami RabbitMQ Cluster",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C2B0-0683-86E8",
			serviceId: "C2B0-0683-86E8",
			displayName: "NVIDIA Image for AI using GPUs",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C2C2-363D-1F89",
			serviceId: "C2C2-363D-1F89",
			displayName: "Cognosys Inc. Orchard CMS on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C313-A88F-D8AA",
			serviceId: "C313-A88F-D8AA",
			displayName: "Bitnami Open edX Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C345-865A-5637",
			serviceId: "C345-865A-5637",
			displayName: "Techlatest.net ethereum-fullnode",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C35E-E979-438B",
			serviceId: "C35E-E979-438B",
			displayName: "Confluent Local Confluent Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C399-D6B0-149D",
			serviceId: "C399-D6B0-149D",
			displayName: "Pluto7 Marketing ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C3AD-803F-FC89",
			serviceId: "C3AD-803F-FC89",
			displayName: "Cloud Deploy",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C3BE-24A5-0975",
			serviceId: "C3BE-24A5-0975",
			displayName: "Cloud Bigtable",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C3DC-08C0-6A72",
			serviceId: "C3DC-08C0-6A72",
			displayName: "Bitnami LAPP Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C3F7-A407-5ABF",
			serviceId: "C3F7-A407-5ABF",
			displayName: "MongoDB Inc. atlas-pro-4",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C405-D222-7FFA",
			serviceId: "C405-D222-7FFA",
			displayName: "Jetware Caffe Python 3.6 NVidia GPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C435-4F42-36F7",
			serviceId: "C435-4F42-36F7",
			displayName: "Pixit Media PixStor Cloud Solo - 10 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C449-7ED7-07D2",
			serviceId: "C449-7ED7-07D2",
			displayName: "Google Click to Deploy Alfresco Community Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C473-562C-110E",
			serviceId: "C473-562C-110E",
			displayName: "End-to-end Testing dm-solution-with-support",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C475-C745-9462",
			serviceId: "C475-C745-9462",
			displayName: "Google Click to Deploy Zabbix",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C481-A385-72C1",
			serviceId: "C481-A385-72C1",
			displayName: "ScaleArc for MySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C49F-B7F2-7416",
			serviceId: "C49F-B7F2-7416",
			displayName: "AlloyDB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C4B7-75BF-A687",
			serviceId: "C4B7-75BF-A687",
			displayName: "Tamr, Inc. Tamr",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C4D0-83C1-B1BD",
			serviceId: "C4D0-83C1-B1BD",
			displayName:
				"F5 Networks F5 Per-App-VE Advanced WAF with LTM, IPI, TC (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C4EF-6F54-1EC6",
			serviceId: "C4EF-6F54-1EC6",
			displayName: "Data Theorem, Inc. API Secure",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C524-E3DA-CB15",
			serviceId: "C524-E3DA-CB15",
			displayName:
				"CIS (Center for Internet Security) CIS Red Hat Enterprise Linux 8 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C54B-2AF3-4BBD",
			serviceId: "C54B-2AF3-4BBD",
			displayName: "Striim Inc. Real-Time Data Integration to SnowFlake",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C56B-E4CF-41A7",
			serviceId: "C56B-E4CF-41A7",
			displayName: "Aviatrix CoPilot - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C576-7194-EB84",
			serviceId: "C576-7194-EB84",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 20.04 LTS STIG Benchmark",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C5A5-F2C4-4556",
			serviceId: "C5A5-F2C4-4556",
			displayName:
				"F5 Networks F5 Per-App-VE Advanced WAF with LTM, IPI, TC (PAYG,25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C5B8-9F7F-DB8C",
			serviceId: "C5B8-9F7F-DB8C",
			displayName:
				"Bitnami WordPress with NGINX and SSL Certified by Bitnami and Automattic",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C5CF-2B8E-DB4D",
			serviceId: "C5CF-2B8E-DB4D",
			displayName: "CubeBackup Inc. CubeBackup-for-Docker",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C5E6-A27F-6A44",
			serviceId: "C5E6-A27F-6A44",
			displayName: "Filemage LLC FileMage SFTP/FTP Gateway",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C5F0-7A89-14CA",
			serviceId: "C5F0-7A89-14CA",
			displayName: "Portworx Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C648-B248-FAAB",
			serviceId: "C648-B248-FAAB",
			displayName: "Pluto7 Education ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C665-08F1-3BCD",
			serviceId: "C665-08F1-3BCD",
			displayName: "JFrog Enterprise: Artifacts, DevSecOps & CI/CD",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C665-CB57-2266",
			serviceId: "C665-CB57-2266",
			displayName:
				"Cognosys Inc. SQL Server 2016 Express on Hardened Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C673-DED6-90C0",
			serviceId: "C673-DED6-90C0",
			displayName: "Prime Strategy Co.,Ltd. KUSANAGI for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C6D3-1896-C530",
			serviceId: "C6D3-1896-C530",
			displayName: "Teradata teradata-on-gcp",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C6EE-FC17-CABF",
			serviceId: "C6EE-FC17-CABF",
			displayName:
				"CIS (Center for Internet Security) CIS SUSE Linux Enterprise Server 12 Benchmark v2.0.0 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C729-A626-D1AE",
			serviceId: "C729-A626-D1AE",
			displayName:
				"Tecknolab DBcloudbin for Oracle bring-your-own-license (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C73A-560A-AA73",
			serviceId: "C73A-560A-AA73",
			displayName: "Miri Infotech SPARKMLLIB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C73B-2497-52D8",
			serviceId: "C73B-2497-52D8",
			displayName:
				"FlashGrid Inc. Oracle Linux 8 Image for FlashGrid Cloud Cluster with Oracle RAC",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C799-C80A-7940",
			serviceId: "C799-C80A-7940",
			displayName: "Techlatest.net Ethereum Developer Kit",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C7B7-8363-860F",
			serviceId: "C7B7-8363-860F",
			displayName: "Bitnami phpBB Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C7DA-6CFA-DF6E",
			serviceId: "C7DA-6CFA-DF6E",
			displayName: "Google Service Control",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C7E2-9256-1C43",
			serviceId: "C7E2-9256-1C43",
			displayName: "Vertex AI",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C813-1887-5DF5",
			serviceId: "C813-1887-5DF5",
			displayName:
				"Fortinet Inc. FortiGate Next-Generation Firewall (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C815-E391-7D7B",
			serviceId: "C815-E391-7D7B",
			displayName:
				"Cloud Infrastructure Services Ubuntu Server 18.04 Minimal OS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C82D-86A0-8E87",
			serviceId: "C82D-86A0-8E87",
			displayName: "Bitnami ERPNext Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C871-6682-5C7C",
			serviceId: "C871-6682-5C7C",
			displayName: "Bitnami Cassandra Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C876-E7B2-3262",
			serviceId: "C876-E7B2-3262",
			displayName:
				"Cloud Infrastructure Services Terraform on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C896-A787-8C84",
			serviceId: "C896-A787-8C84",
			displayName: "Exasol Analytics Database BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C8AF-7DE1-4FB8",
			serviceId: "C8AF-7DE1-4FB8",
			displayName: "F5, Inc f5-big-best-plus-payg-200mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C8B4-6F01-77A3",
			serviceId: "C8B4-6F01-77A3",
			displayName: "Bitnami ProcessWire Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C8D4-BD31-1966",
			serviceId: "C8D4-BD31-1966",
			displayName: "AppScale",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C913-A104-6A1A",
			serviceId: "C913-A104-6A1A",
			displayName: "Genymotion Cloud: Android 6.0 (marshmallow)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C978-73A6-5717",
			serviceId: "C978-73A6-5717",
			displayName: "Miri Infotech GetSimpleCMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C9E3-3737-D448",
			serviceId: "C9E3-3737-D448",
			displayName: "Google Click to Deploy Neo4j Community Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C9E7-8067-301E",
			serviceId: "C9E7-8067-301E",
			displayName: "Pollstar Data Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/C9F7-BD4D-53DE",
			serviceId: "C9F7-BD4D-53DE",
			displayName: "Google Click to Deploy ConcreteCMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CA26-29B9-5631",
			serviceId: "CA26-29B9-5631",
			displayName: "Miri Infotech Dokuwiki",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CA35-F316-551B",
			serviceId: "CA35-F316-551B",
			displayName: "Qubole Data Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CAA8-97E6-6B1B",
			serviceId: "CAA8-97E6-6B1B",
			displayName:
				"Cloud Infrastructure Services Docker Compose Server on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CAC3-9850-F32E",
			serviceId: "CAC3-9850-F32E",
			displayName: "SL Corp. RTView DataServer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CAC9-F3C7-B492",
			serviceId: "CAC9-F3C7-B492",
			displayName: "Zadara Cube - 3.2TB SSD Block and File Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CAD8-1AAB-F97D",
			serviceId: "CAD8-1AAB-F97D",
			displayName: "Pulse Secure, LLC Virtual Web Application Firewall",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CAE2-A537-4A95",
			serviceId: "CAE2-A537-4A95",
			displayName: "Source Repository",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CB25-DC24-1CE2",
			serviceId: "CB25-DC24-1CE2",
			displayName:
				"InfluxData, the creators of InfluxDB InfluxDB Cloud (Official Version)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CB70-6EC2-B062",
			serviceId: "CB70-6EC2-B062",
			displayName: "Matillion ETL for BigQuery - Large",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CB70-D128-CFA4",
			serviceId: "CB70-D128-CFA4",
			displayName: "Veritas Technologies Veritas CloudPoint",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC08-C8DE-2F0F",
			serviceId: "CC08-C8DE-2F0F",
			displayName:
				"Cloud Infrastructure Services SFTP Secure Server Windows 2019 SSH",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC2A-9477-449E",
			serviceId: "CC2A-9477-449E",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - GOOD  (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC37-DD9B-79CC",
			serviceId: "CC37-DD9B-79CC",
			displayName:
				"Cloud Infrastructure Services MySQL Server On Windows 2016 + PhpMyadmin + Apache",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC51-6583-15C9",
			serviceId: "CC51-6583-15C9",
			displayName: "Safe Software FME Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC63-0873-48FD",
			serviceId: "CC63-0873-48FD",
			displayName: "Cloud Spanner",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC63-6992-BE0E",
			serviceId: "CC63-6992-BE0E",
			displayName:
				"Cloud Infrastructure Services Proxy Cache Server using Squid",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC68-BAF3-8BC2",
			serviceId: "CC68-BAF3-8BC2",
			displayName:
				"LIVNSENSE TECHNOLOGIES PRIVATE LIMITED lns-weldsense-public",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC72-EF43-BF03",
			serviceId: "CC72-EF43-BF03",
			displayName: "TigerGraph Inc. tigergraph-enterprise-edition-2-5-2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC8F-579E-007E",
			serviceId: "CC8F-579E-007E",
			displayName:
				"Cloud Infrastructure Services DNS Server - BIND DNS Server on Ubuntu 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC8F-E88B-8404",
			serviceId: "CC8F-E88B-8404",
			displayName:
				"F5 Networks F5 Per-App VE  BIG-IP LTM  (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CC93-362A-2239",
			serviceId: "CC93-362A-2239",
			displayName: "Climate Engine Enterprise Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CCA1-C085-070F",
			serviceId: "CCA1-C085-070F",
			displayName: "Miri Infotech Memcached",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CCA3-BCE1-4084",
			serviceId: "CCA3-BCE1-4084",
			displayName: "Cognosys Inc. Mediawiki With CentOS 8 Stream",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CCA6-D23D-4CD6",
			serviceId: "CCA6-D23D-4CD6",
			displayName: "Cognosys Inc. Haproxy on Ubuntu 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CCD8-9BF1-090E",
			serviceId: "CCD8-9BF1-090E",
			displayName: "Kubernetes Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CD6E-6671-1BCC",
			serviceId: "CD6E-6671-1BCC",
			displayName: "Bitnami Kafka Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CD87-46A2-EE79",
			serviceId: "CD87-46A2-EE79",
			displayName: "Anthos Config Management",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CD99-849B-C7FB",
			serviceId: "CD99-849B-C7FB",
			displayName: "Kx Systems kdb+",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CDB9-D786-AB95",
			serviceId: "CDB9-D786-AB95",
			displayName: "Genymotion genymotion-11-0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CDCF-6C9A-3353",
			serviceId: "CDCF-6C9A-3353",
			displayName: "Bitnami Diaspora Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CDD8-6FD5-E320",
			serviceId: "CDD8-6FD5-E320",
			displayName: "FASTDATA.IO PlasmaENGINE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CE1D-E1A6-DFAC",
			serviceId: "CE1D-E1A6-DFAC",
			displayName: "Cognosys Inc. Windows File Server On Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CE28-B9D9-FA03",
			serviceId: "CE28-B9D9-FA03",
			displayName: "Twinword Inc. Visual Context Graph API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CE33-B1C2-0A85",
			serviceId: "CE33-B1C2-0A85",
			displayName: "Quobyte Inc. Quobyte Data Center File System",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CE4B-987A-C45B",
			serviceId: "CE4B-987A-C45B",
			displayName:
				"Bitnami WordPress Multisite Certified by Bitnami and Automattic  ",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CE84-C875-5229",
			serviceId: "CE84-C875-5229",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CEAC-A377-01E2",
			serviceId: "CEAC-A377-01E2",
			displayName: "VM Bugbash 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CEE1-AB33-61D7",
			serviceId: "CEE1-AB33-61D7",
			displayName:
				"Cognosys Inc. Acquia Drupal on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CF19-8E92-8CCB",
			serviceId: "CF19-8E92-8CCB",
			displayName: "ANALOG INDUSTRIES LLP Accelerated Cloudpanel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CF4B-D88B-670F",
			serviceId: "CF4B-D88B-670F",
			displayName: "Google Click to Deploy SonarQube",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/CF79-2786-ADFC",
			serviceId: "CF79-2786-ADFC",
			displayName: "Maps Static API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/CFF1-419D-6B3E",
			serviceId: "CFF1-419D-6B3E",
			displayName: "Frontline Hardened CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D019-B0E8-5E47",
			serviceId: "D019-B0E8-5E47",
			displayName: "Miri Infotech Microweber",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D058-86F8-0525",
			serviceId: "D058-86F8-0525",
			displayName: "Matillion ETL for BigQuery - Medium",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D0D1-44CA-FE8D",
			serviceId: "D0D1-44CA-FE8D",
			displayName: "Thunder Technologies LLC Thunder for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D134-AC8C-B4F9",
			serviceId: "D134-AC8C-B4F9",
			displayName: "Bitnami nginx-intel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D15A-FCFE-A87E",
			serviceId: "D15A-FCFE-A87E",
			displayName:
				"F5 Networks F5 BIG-IP VE  ALL   (BYOL, 1 Boot Location)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D163-14AA-9CC8",
			serviceId: "D163-14AA-9CC8",
			displayName:
				"Cloud Infrastructure Services MySQL Server On Windows 2019 + PhpMyadmin + Apache",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D1A4-6E49-0E23",
			serviceId: "D1A4-6E49-0E23",
			displayName: "Cognosys Inc. Iometer on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D1A7-CE5B-8536",
			serviceId: "D1A7-CE5B-8536",
			displayName: "Panzura Inc. Panzura CloudFS 8.0.0.10",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D204-FBBE-8B68",
			serviceId: "D204-FBBE-8B68",
			displayName: "Maps SDK for Unity",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/D231-A46B-B9CA",
			serviceId: "D231-A46B-B9CA",
			displayName: "AELF PTE. LTD aelf Blockchain for Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D260-5FA3-DB05",
			serviceId: "D260-5FA3-DB05",
			displayName: "Aiven for Apache Kafka",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D27B-80BA-0A58",
			serviceId: "D27B-80BA-0A58",
			displayName: "Geolytica inc reverse-geocode-lite-3geonames-org",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D2B4-2B2E-E060",
			serviceId: "D2B4-2B2E-E060",
			displayName: "Pumpkin DB pumpkin-saas-no-migration",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D2D3-5F3C-41AD",
			serviceId: "D2D3-5F3C-41AD",
			displayName:
				"Denodo Technologies Inc. Denodo Platform 8.0 SM on Linux (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D31D-E09D-0998",
			serviceId: "D31D-E09D-0998",
			displayName: "F5, Inc f5-big-best-plus-payg-5gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D332-8C11-B257",
			serviceId: "D332-8C11-B257",
			displayName: "Fluid Numerics Fluid-Slurm-GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D35D-C4B7-89DB",
			serviceId: "D35D-C4B7-89DB",
			displayName: "Couchbase Sync Gateway (BYOL and Test Drive)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D35F-5FDC-481E",
			serviceId: "D35F-5FDC-481E",
			displayName:
				"BlueCat Networks BlueCat DNS for Google Cloud Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D366-8356-E9B7",
			serviceId: "D366-8356-E9B7",
			displayName: "floreysoft Ultradox for G Suite",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D36B-12FA-50DA",
			serviceId: "D36B-12FA-50DA",
			displayName: "Crux Informatics Crux Deliver",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D37B-2F83-9EC4",
			serviceId: "D37B-2F83-9EC4",
			displayName:
				"Check Point Software Technologies Check Point CloudGuard IaaS Security Autoscaling (PAYG)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D39A-D6C1-614B",
			serviceId: "D39A-D6C1-614B",
			displayName:
				"Cloud Infrastructure Services SFTP Secure Server Windows 2016 SSH",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D3D1-23B6-0B2B",
			serviceId: "D3D1-23B6-0B2B",
			displayName: "Parabricks",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D3DB-1096-57A8",
			serviceId: "D3DB-1096-57A8",
			displayName: "Bitnami Kong Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D3E5-8B93-B107",
			serviceId: "D3E5-8B93-B107",
			displayName: "Google Click to Deploy Moodle",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D3F2-E5A0-D197",
			serviceId: "D3F2-E5A0-D197",
			displayName:
				"Cloud Infrastructure Services Windows Server 2019 Core Minimal OS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D3FB-F24E-4B05",
			serviceId: "D3FB-F24E-4B05",
			displayName: "Bitnami Composr Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D403-EB41-2BA6",
			serviceId: "D403-EB41-2BA6",
			displayName: "Miri Infotech Impresspages",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D41C-DC6C-9211",
			serviceId: "D41C-DC6C-9211",
			displayName: "Chef Software chef-automate-cscc",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D43B-BD29-C4B8",
			serviceId: "D43B-BD29-C4B8",
			displayName:
				"Cognosys Inc. MySQL 5.6 on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D455-D696-6F00",
			serviceId: "D455-D696-6F00",
			displayName: "Google Click to Deploy Discourse",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D47D-17EB-AA2A",
			serviceId: "D47D-17EB-AA2A",
			displayName:
				"OmniSci, Inc. Omnisci Enterprise Edition for CPU (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D47F-5264-0EC4",
			serviceId: "D47F-5264-0EC4",
			displayName:
				"Cognosys Inc. Secured SQL Server 2014 Enterprise on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D48F-B80B-9749",
			serviceId: "D48F-B80B-9749",
			displayName: "Genymotion Cloud: Android 10.0 (Q)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D4BA-2EE5-1D7D",
			serviceId: "D4BA-2EE5-1D7D",
			displayName: "Pluto7 Supplier ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D4DF-2EF7-0A53",
			serviceId: "D4DF-2EF7-0A53",
			displayName: "Odysseus Data Services, Inc OHDSI ATLAS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D4E5-20F4-F342",
			serviceId: "D4E5-20F4-F342",
			displayName:
				"Cloud Infrastructure Services Secure FTP Server Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D506-2E0B-82C1",
			serviceId: "D506-2E0B-82C1",
			displayName: "RStudio, PBC RStudio Server Pro Standard for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D507-6413-1F13",
			serviceId: "D507-6413-1F13",
			displayName: "add free trial tester",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D54B-9FF7-38E8",
			serviceId: "D54B-9FF7-38E8",
			displayName:
				"Cloud Infrastructure Services RabbitMQ Server on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D55D-9DC8-823D",
			serviceId: "D55D-9DC8-823D",
			displayName: "Cognosys Inc. Magento on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D5B4-886C-DEFE",
			serviceId: "D5B4-886C-DEFE",
			displayName:
				"Cloud Infrastructure Services PostgreSQL Server + pgAdmin on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D5C0-183C-9C59",
			serviceId: "D5C0-183C-9C59",
			displayName: "Cognosys Inc. Elasticsearch on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D5D5-3B5E-42C7",
			serviceId: "D5D5-3B5E-42C7",
			displayName: "Cognosys Inc. Lamp With CentOS 7.7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D60B-B3DA-95A9",
			serviceId: "D60B-B3DA-95A9",
			displayName:
				"Cloud Infrastructure Services Nagios Core Monitoring Server on Ubuntu 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D633-08F1-74F8",
			serviceId: "D633-08F1-74F8",
			displayName: "Google Click to Deploy Percona",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D64E-AF12-1813",
			serviceId: "D64E-AF12-1813",
			displayName: "Cloud Data Loss Prevention",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D652-FB32-33B4",
			serviceId: "D652-FB32-33B4",
			displayName: "Presslabs Presslabs Dashboard",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D680-4C2A-89EE",
			serviceId: "D680-4C2A-89EE",
			displayName: "Google Click to Deploy TestLink",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D6BF-F7F0-FCE8",
			serviceId: "D6BF-F7F0-FCE8",
			displayName: "Cognosys Inc. Wordpress on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D6CE-C5C5-6E28",
			serviceId: "D6CE-C5C5-6E28",
			displayName: "Cognosys Inc. IIS Microsoft on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D6DC-BAE5-27A7",
			serviceId: "D6DC-BAE5-27A7",
			displayName: "Jetware TensorFlow CPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D6F0-3D95-4E39",
			serviceId: "D6F0-3D95-4E39",
			displayName: "Miri Infotech PyroCMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D73B-5EEA-8215",
			serviceId: "D73B-5EEA-8215",
			displayName: "Notebooks",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D749-E379-C6F0",
			serviceId: "D749-E379-C6F0",
			displayName: "Cognosys Inc. LAMP on CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D755-FF83-08A7",
			serviceId: "D755-FF83-08A7",
			displayName: "Maidenhead Bridge Limited csc-gre-1g-gloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D77E-743D-63F2",
			serviceId: "D77E-743D-63F2",
			displayName: "Elotl Kip Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D7AF-4D89-3C2F",
			serviceId: "D7AF-4D89-3C2F",
			displayName: "Pluto7 Value Chain ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D7B2-ADDD-08FD",
			serviceId: "D7B2-ADDD-08FD",
			displayName: "Miri Infotech CuteNews",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D7C1-3BB4-C0A8",
			serviceId: "D7C1-3BB4-C0A8",
			displayName:
				"F5 Networks F5 Per-App VE  Advanced WAF  (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D7CA-8319-A87F",
			serviceId: "D7CA-8319-A87F",
			displayName: "Galactic Fog Gestalt",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D7E1-D7C8-3657",
			serviceId: "D7E1-D7C8-3657",
			displayName: "NVIDIA PyTorch from NVIDIA",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D819-74AC-1E0C",
			serviceId: "D819-74AC-1E0C",
			displayName: "Twinword Inc. Text Classification API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D868-CBC6-8F07",
			serviceId: "D868-CBC6-8F07",
			displayName:
				"CIS (Center for Internet Security) CIS CentOS Linux 6 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D870-408D-92A6",
			serviceId: "D870-408D-92A6",
			displayName: "Cloud Document AI API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D876-6B60-6041",
			serviceId: "D876-6B60-6041",
			displayName: "AtOS Evidian IDaaS (Identity as a Service)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D884-E686-6DCB",
			serviceId: "D884-E686-6DCB",
			displayName: "Bitnami wordpress-intel",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D8E6-8312-FE6B",
			serviceId: "D8E6-8312-FE6B",
			displayName: "Miri Infotech KnownLMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D909-55BF-2B2F",
			serviceId: "D909-55BF-2B2F",
			displayName: "Cloud Talent Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D919-A8EB-DAEF",
			serviceId: "D919-A8EB-DAEF",
			displayName:
				"Oneledger Technology Inc. OneLedger Chronos Testnet Full Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D931-C0D6-087A",
			serviceId: "D931-C0D6-087A",
			displayName: "ANALOG INDUSTRIES LLP Accelerated Joomla",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D95E-CEB2-F269",
			serviceId: "D95E-CEB2-F269",
			displayName: "Neo4j Aura Enterprise Database-as-a-Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D961-88BE-4D2D",
			serviceId: "D961-88BE-4D2D",
			displayName: "Transfer Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D965-CD1C-EC33",
			serviceId: "D965-CD1C-EC33",
			displayName: "Bitnami Let's Chat Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D97A-6B48-25A0",
			serviceId: "D97A-6B48-25A0",
			displayName: "ANALOG INNOVATION PVT LTD Managed ERPNext",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D97E-AB26-5D95",
			serviceId: "D97E-AB26-5D95",
			displayName: "Cloud Filestore",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D98A-BF89-4415",
			serviceId: "D98A-BF89-4415",
			displayName: "Cognosys Inc. Redis on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D990-3311-700B",
			serviceId: "D990-3311-700B",
			displayName: "SeMI Technologies B.V. Weaviate Search Graph",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D99B-0188-00FA",
			serviceId: "D99B-0188-00FA",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D9A1-3B2E-9672",
			serviceId: "D9A1-3B2E-9672",
			displayName: "Pixit Media PixStor Cloud - Performance Tier",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/D9C3-114E-B242",
			serviceId: "D9C3-114E-B242",
			displayName: "Master Concept (Hong Kong) Limited ListenOn",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DA04-BE2D-0A86",
			serviceId: "DA04-BE2D-0A86",
			displayName: "Bitnami MEAN Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DA1B-B9C8-944D",
			serviceId: "DA1B-B9C8-944D",
			displayName: "Jetware MySQL 5.7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DA55-99FB-2C77",
			serviceId: "DA55-99FB-2C77",
			displayName:
				"Cognosys Inc. SQL Server 2012 Express on Hardened Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DA8E-F0F0-FC02",
			serviceId: "DA8E-F0F0-FC02",
			displayName:
				"Couchbase Server and Sync Gateway (BYOL and Test Drive)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DAB9-0998-D4D9",
			serviceId: "DAB9-0998-D4D9",
			displayName:
				"Cloud Infrastructure Services WordPress Server on Ubuntu 20.04 + Apache Web Server + FTP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DB15-A0A8-D874",
			serviceId: "DB15-A0A8-D874",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 14.04 Benchmark v2.0.2 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DB23-EB68-0CA9",
			serviceId: "DB23-EB68-0CA9",
			displayName: "Bitnami Moodle Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DB2B-AE22-9081",
			serviceId: "DB2B-AE22-9081",
			displayName: "Cognosys Inc. Axcrypt on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DB9C-E2E2-5C14",
			serviceId: "DB9C-E2E2-5C14",
			displayName:
				"NETSCOUT Systems, Inc. NETSCOUT Application Performance Management for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DBA1-72A7-AFCD",
			serviceId: "DBA1-72A7-AFCD",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DBF4-58A7-127D",
			serviceId: "DBF4-58A7-127D",
			displayName: "Miri Infotech NAGIOS-CORE",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DBF5-C752-7732",
			serviceId: "DBF5-C752-7732",
			displayName:
				"Cloud Infrastructure Services MariaDB Server on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC11-1018-10E2",
			serviceId: "DC11-1018-10E2",
			displayName: "Calculated Systems LLC Natural Language Accelerator",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC2D-D6FE-5450",
			serviceId: "DC2D-D6FE-5450",
			displayName: "Sureline Systems, Inc SUREedge DR",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC40-40AC-48AC",
			serviceId: "DC40-40AC-48AC",
			displayName: "Safe Software FME Desktop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC5D-D207-FD2F",
			serviceId: "DC5D-D207-FD2F",
			displayName: "Identity Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC66-1CC6-B984",
			serviceId: "DC66-1CC6-B984",
			displayName:
				"Cloud Infrastructure Services HPC Pack 2019 Cluster on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC8E-7DCB-F5C1",
			serviceId: "DC8E-7DCB-F5C1",
			displayName: "Bitnami CMS Made Simple Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DC9D-4B79-CC9E",
			serviceId: "DC9D-4B79-CC9E",
			displayName: "Miri Infotech H2O",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DCA3-44D1-341C",
			serviceId: "DCA3-44D1-341C",
			displayName:
				"Barracuda Networks, Inc. Barracuda CloudGen Firewall (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DCA4-D68C-8C2C",
			serviceId: "DCA4-D68C-8C2C",
			displayName: "Miri Infotech Textpattern",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DCC9-8DB9-673F",
			serviceId: "DCC9-8DB9-673F",
			displayName: "BigQuery Storage API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DCD0-3FD6-B279",
			serviceId: "DCD0-3FD6-B279",
			displayName: "Jetware MXNet 1 Python 3.6 NVidia GPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DD2A-3C5C-44AF",
			serviceId: "DD2A-3C5C-44AF",
			displayName: "Looker Data Platform SaaS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DD37-E18E-5E66",
			serviceId: "DD37-E18E-5E66",
			displayName: "Bitnami OroCRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DD3A-CCB2-2B76",
			serviceId: "DD3A-CCB2-2B76",
			displayName: "Confluent Apache Kafka on Confluent Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DD97-1746-B345",
			serviceId: "DD97-1746-B345",
			displayName:
				"Cognosys Inc. Secured EC Cube Global on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DDB4-B88A-C380",
			serviceId: "DDB4-B88A-C380",
			displayName: "Vertica Management Console - Hourly License",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DDC7-6655-57FB",
			serviceId: "DDC7-6655-57FB",
			displayName: "Jetware Redmine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DDD2-841F-0449",
			serviceId: "DDD2-841F-0449",
			displayName: "Batch on GKE HTCondor on GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DDF6-41CE-8D72",
			serviceId: "DDF6-41CE-8D72",
			displayName:
				"Cloud Infrastructure Services Docker Engine - Enterprise for Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DE18-8083-AB58",
			serviceId: "DE18-8083-AB58",
			displayName: "Miri Infotech prometheus-v-2-29-1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DE1D-AB8E-9227",
			serviceId: "DE1D-AB8E-9227",
			displayName: "Cognosys Inc. MySQL 5.7 With RedHat 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DE5F-D84C-F733",
			serviceId: "DE5F-D84C-F733",
			displayName: "Remote Build Execution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DEA0-EC0C-B05A",
			serviceId: "DEA0-EC0C-B05A",
			displayName: "Cosmitude Softwares Private Limited Cosmitude Bridge",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DEB2-711E-C16B",
			serviceId: "DEB2-711E-C16B",
			displayName: "Matillion ETL for BigQuery - Extra Large",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DEC2-DD39-CBB0",
			serviceId: "DEC2-DD39-CBB0",
			displayName: "NVIDIA Gaming PC - Ubuntu 18.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DEFB-D14E-F638",
			serviceId: "DEFB-D14E-F638",
			displayName: "Juniper Networks Inc. vSRX Next Generation Firewall",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DF08-BD3F-562D",
			serviceId: "DF08-BD3F-562D",
			displayName: "3CX Ltd. 3CX",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DF19-0C97-2CE8",
			serviceId: "DF19-0C97-2CE8",
			displayName: "Miri Infotech Booked Scheduler",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DF2E-EE3B-FA0F",
			serviceId: "DF2E-EE3B-FA0F",
			displayName:
				"Cognosys Inc. Visual Studio 2015 Enterprise on Hardened Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DF31-87E4-0D55",
			serviceId: "DF31-87E4-0D55",
			displayName: "Cognosys Inc. Django on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DF35-8442-2DDC",
			serviceId: "DF35-8442-2DDC",
			displayName: "Citrix Systems, Inc. Citrix SD-WAN Standard Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DF46-13F9-1229",
			serviceId: "DF46-13F9-1229",
			displayName:
				"Palo Alto Networks, Inc. VM-Series Next-Generation Firewall (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DFA1-8811-7D40",
			serviceId: "DFA1-8811-7D40",
			displayName:
				"Cloud Infrastructure Services Apache Tomcat Server on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DFE5-94BF-15DC",
			serviceId: "DFE5-94BF-15DC",
			displayName: "Miri Infotech clamav-v-0-103-2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/DFE9-E8BA-0A74",
			serviceId: "DFE9-E8BA-0A74",
			displayName:
				"NGINX, Inc NGINX Plus with NGINX App Protect - Premium (Debian 10)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E000-3F24-B8AA",
			serviceId: "E000-3F24-B8AA",
			displayName: "Cloud TPU",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E00C-44EC-3E26",
			serviceId: "E00C-44EC-3E26",
			displayName:
				"CIS (Center for Internet Security) CIS Debian Linux 10 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E023-86CA-6F84",
			serviceId: "E023-86CA-6F84",
			displayName: "Miri Infotech XMB Forum",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E039-35F7-F05D",
			serviceId: "E039-35F7-F05D",
			displayName: "Miri Infotech Mautic",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E043-C790-E901",
			serviceId: "E043-C790-E901",
			displayName:
				"Cisco Systems Cisco Firepower Management Center (FMCv) BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E06F-69E0-4437",
			serviceId: "E06F-69E0-4437",
			displayName: "Cognosys Inc. WordPress on CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E09D-26AD-C9A8",
			serviceId: "E09D-26AD-C9A8",
			displayName: "Virtru for Data Encryption, Protection, and Privacy",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E0A6-9DE6-C505",
			serviceId: "E0A6-9DE6-C505",
			displayName:
				"LiteSpeed Technologies-public openlitespeed-wordpress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E0F4-5B8E-919A",
			serviceId: "E0F4-5B8E-919A",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 7.9 (v20210616)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E0F6-1565-F073",
			serviceId: "E0F6-1565-F073",
			displayName: "Tanker",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E14A-C4FE-B729",
			serviceId: "E14A-C4FE-B729",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 18.04 LTS Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E158-26A8-50D0",
			serviceId: "E158-26A8-50D0",
			displayName: "Cognosys Inc. Secured MODx CMS on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E162-DA67-405A",
			serviceId: "E162-DA67-405A",
			displayName: "Bitnami Grafana Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E17D-0512-7FB8",
			serviceId: "E17D-0512-7FB8",
			displayName: "Google Click to Deploy Microsoft Active Directory",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E187-2D5B-641F",
			serviceId: "E187-2D5B-641F",
			displayName: "Coder Technologies, Inc. Coder (GCP)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E196-A643-6B10",
			serviceId: "E196-A643-6B10",
			displayName: "Jetware Caffe Python 3.6 CPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E19D-14A9-5725",
			serviceId: "E19D-14A9-5725",
			displayName: "Cloud Machine Learning Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E1D8-71A6-53DE",
			serviceId: "E1D8-71A6-53DE",
			displayName: "Distance Matrix API",
			businessEntityName: "businessEntities/Maps",
		},
		{
			name: "services/E212-9E5B-9BC7",
			serviceId: "E212-9E5B-9BC7",
			displayName: "Harness, Inc. Harness Continuous Delivery",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E2A2-B150-D6C0",
			serviceId: "E2A2-B150-D6C0",
			displayName:
				"Cloud Infrastructure Services Docker Engine - Enterprise for Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E30B-97DE-1DA1",
			serviceId: "E30B-97DE-1DA1",
			displayName:
				"Palo Alto Networks, Inc. Prisma SD WAN ION Virtual Appliance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E30E-1089-5EDF",
			serviceId: "E30E-1089-5EDF",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BEST  (PAYG, 10Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E33D-F35F-F6C5",
			serviceId: "E33D-F35F-F6C5",
			displayName:
				"Fortinet Inc. FortiManager Centralized Security Management",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E342-B6DB-4748",
			serviceId: "E342-B6DB-4748",
			displayName: "Tempered Airwall Gateway v3.0.0",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E369-F19B-1BCF",
			serviceId: "E369-F19B-1BCF",
			displayName:
				"Cognosys Inc. SQL Server Web 2017 on Linux - SUSE 12 SP3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E3BE-EFD0-ADD8",
			serviceId: "E3BE-EFD0-ADD8",
			displayName:
				"Cloud Infrastructure Services Jenkins on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E415-1C3E-95B8",
			serviceId: "E415-1C3E-95B8",
			displayName:
				"Perforce Software Inc. PHP 7.1 - Zend Server Developer Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E472-CF45-00CD",
			serviceId: "E472-CF45-00CD",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 2.5.0 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E4FB-3343-2982",
			serviceId: "E4FB-3343-2982",
			displayName:
				"F5 Networks F5 Adv WAF with LTM, IPI, Threat Campaigns (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E505-1604-58F8",
			serviceId: "E505-1604-58F8",
			displayName: "Networking",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E51C-03E8-8B48",
			serviceId: "E51C-03E8-8B48",
			displayName: "Aviatrix Secured Networking Platform - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E552-B7A8-0941",
			serviceId: "E552-B7A8-0941",
			displayName: "Zadara Cube - 20TB Block and File Storage",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E56C-64E4-1D3E",
			serviceId: "E56C-64E4-1D3E",
			displayName: "Cognosys Inc. Gradle on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E57B-C69B-2219",
			serviceId: "E57B-C69B-2219",
			displayName:
				"Cognosys Inc. SQL Server Standard 2017 on Linux - SUSE 12 SP3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E5BF-3441-BB02",
			serviceId: "E5BF-3441-BB02",
			displayName:
				"Pulse Secure, LLC Traffic Manager Standard Edition - 200 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E5EC-42A3-CD4F",
			serviceId: "E5EC-42A3-CD4F",
			displayName: "Miri Infotech Nagios",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E5FE-878F-FECE",
			serviceId: "E5FE-878F-FECE",
			displayName: "Vertex AI Vision",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E627-1426-2B92",
			serviceId: "E627-1426-2B92",
			displayName: "Miri Infotech magento",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E6BF-F33D-EE58",
			serviceId: "E6BF-F33D-EE58",
			displayName: "Google Click to Deploy Hadoop",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E6C8-A86E-5637",
			serviceId: "E6C8-A86E-5637",
			displayName: "Tecknolab DBcloudbin for Oracle Pay-As-You-Go",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E722-8436-A7EB",
			serviceId: "E722-8436-A7EB",
			displayName: "Workflows",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E733-8E93-C10D",
			serviceId: "E733-8E93-C10D",
			displayName: "Miri Infotech ExponentCMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E754-DDD1-D547",
			serviceId: "E754-DDD1-D547",
			displayName:
				"Fortinet Inc. Fortinet FortiWeb Cloud WAF-as-a-Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E77D-9F4B-920B",
			serviceId: "E77D-9F4B-920B",
			displayName:
				"Cloud Infrastructure Services MySQL Server + phpMyadmin on Ubuntu Server 20.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E788-A7A7-4BD0",
			serviceId: "E788-A7A7-4BD0",
			displayName: "Varnish Software Inc. Varnish Enterprise 6 (Red Hat)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E790-1EC8-206A",
			serviceId: "E790-1EC8-206A",
			displayName: "Weaveworks",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E795-801D-3D06",
			serviceId: "E795-801D-3D06",
			displayName: "Bitnami Jenkins Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E7F1-C2CD-B842",
			serviceId: "E7F1-C2CD-B842",
			displayName: "Google Click to Deploy Memcached",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E832-15F4-C722",
			serviceId: "E832-15F4-C722",
			displayName: "Binary Authorization",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E86B-A11A-5E47",
			serviceId: "E86B-A11A-5E47",
			displayName:
				"CIS (Center for Internet Security) CIS Debian Linux 8 Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E875-E440-F70A",
			serviceId: "E875-E440-F70A",
			displayName: "White Ops Inc. Keep it Human",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E8C6-3110-5AA7",
			serviceId: "E8C6-3110-5AA7",
			displayName:
				"Cognosys Inc. Internet Information Server with Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E8CF-817F-28B5",
			serviceId: "E8CF-817F-28B5",
			displayName: "Bitnami OpenProject Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E8D5-FB34-2DB9",
			serviceId: "E8D5-FB34-2DB9",
			displayName: "Bitnami Redis Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E8D9-545C-7AAB",
			serviceId: "E8D9-545C-7AAB",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - GOOD  (PAYG, 200Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E904-3803-243D",
			serviceId: "E904-3803-243D",
			displayName: "ManagedKube Kubernetes Cost Attribution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E958-B024-457B",
			serviceId: "E958-B024-457B",
			displayName:
				"Cognosys Inc. Gitlab Community Edition With Ubuntu 18.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E9B0-8F93-73F6",
			serviceId: "E9B0-8F93-73F6",
			displayName: "Cognosys Inc. Haproxy on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E9E6-7C65-5FBC",
			serviceId: "E9E6-7C65-5FBC",
			displayName:
				"Perforce Software Inc. OpenLogic CentOS 7.9 (v20201130) - Security Hardened",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/E9FE-C55B-32C0",
			serviceId: "E9FE-C55B-32C0",
			displayName:
				"Cloud Infrastructure Services Firebird SQL RDBMS Server on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EA01-2E0D-0421",
			serviceId: "EA01-2E0D-0421",
			displayName:
				"Cognosys Inc. Visual Studio Professional 2019 on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EA3F-B175-00A2",
			serviceId: "EA3F-B175-00A2",
			displayName:
				"Cloud Infrastructure Services VPN Server Solution using SoftEther VPN on Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EA53-3E01-CEDC",
			serviceId: "EA53-3E01-CEDC",
			displayName: "Bitnami Elasticsearch Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EA83-40E7-C3B6",
			serviceId: "EA83-40E7-C3B6",
			displayName: "BigID, Inc. BigID Data Intelligence Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EACB-FC91-B338",
			serviceId: "EACB-FC91-B338",
			displayName: "CLOUDUP INFOTECH PRIVATE LIMITED Advance WordPress",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EAEC-9CF2-5E3D",
			serviceId: "EAEC-9CF2-5E3D",
			displayName: "Twinword Inc. Word Quiz API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EAF0-4E95-D26A",
			serviceId: "EAF0-4E95-D26A",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 3.1.5 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EB09-C71F-0F3F",
			serviceId: "EB09-C71F-0F3F",
			displayName: "Bitnami Mantis Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EB59-249D-260B",
			serviceId: "EB59-249D-260B",
			displayName: "Citrix Systems, Inc. Citrix SD-WAN Standard Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EB61-B7BB-4A03",
			serviceId: "EB61-B7BB-4A03",
			displayName: "Miri Infotech Django",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EBFF-33C7-5DBD",
			serviceId: "EBFF-33C7-5DBD",
			displayName:
				"Cognosys Inc. Team Foundation Server 2015 on Windows 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EC22-1A6C-8E2D",
			serviceId: "EC22-1A6C-8E2D",
			displayName: "Cognosys Inc. Joomla on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ECA1-E604-FA86",
			serviceId: "ECA1-E604-FA86",
			displayName: "Bitnami EspoCRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ECE8-9BB4-C662",
			serviceId: "ECE8-9BB4-C662",
			displayName: "Neo4j Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ECE9-04A7-829A",
			serviceId: "ECE9-04A7-829A",
			displayName:
				"Cognosys Inc. SQL Server 2019 Standard on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ECFC-1E04-D178",
			serviceId: "ECFC-1E04-D178",
			displayName: "Cavirin Systems CavirinFree",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED2A-C905-65D4",
			serviceId: "ED2A-C905-65D4",
			displayName: "HeadSpin HeadSpin Mobile Performance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED34-2A09-AC0E",
			serviceId: "ED34-2A09-AC0E",
			displayName: "Red Pill Analytics",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED36-0943-21BF",
			serviceId: "ED36-0943-21BF",
			displayName: "Denovolab Class4v5 softswitch",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED40-C1FC-B04D",
			serviceId: "ED40-C1FC-B04D",
			displayName:
				"Cloud Infrastructure Services LAMP Stack Server on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED4B-364E-AFB8",
			serviceId: "ED4B-364E-AFB8",
			displayName: "Bitnami Zurmo Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED52-3811-2BF0",
			serviceId: "ED52-3811-2BF0",
			displayName: "Bitnami X2Engine Sales CRM Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED7E-EEE2-4808",
			serviceId: "ED7E-EEE2-4808",
			displayName: "Miri Infotech CMS Made Simple",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/ED8F-8835-4D3B",
			serviceId: "ED8F-8835-4D3B",
			displayName:
				"TigerGraph Inc. TigerGraph Enterprise 3.1.2 (Single Server Ed.)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EDA0-C143-A2FB",
			serviceId: "EDA0-C143-A2FB",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX FIPS - Customer Licensed",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EDA4-10BF-88A3",
			serviceId: "EDA4-10BF-88A3",
			displayName: "Cloud AutoML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EDEB-A347-20B4",
			serviceId: "EDEB-A347-20B4",
			displayName: "Collibra collibra-data-intelligence-cloud-gcp",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EE2F-D110-890C",
			serviceId: "EE2F-D110-890C",
			displayName: "Cloud Key Management Service (KMS)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EE7E-DBB7-8693",
			serviceId: "EE7E-DBB7-8693",
			displayName: "AODocs",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EE82-7A5E-871C",
			serviceId: "EE82-7A5E-871C",
			displayName: "Secret Manager",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EE83-8F28-2310",
			serviceId: "EE83-8F28-2310",
			displayName:
				"Cognosys Inc. Secured SQL Server 2014 Standard on Windows Server 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EE9B-C31F-F6DB",
			serviceId: "EE9B-C31F-F6DB",
			displayName:
				"Plesk for Windows - Licensed - Website & WordPress Platform",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EEEF-E90C-5339",
			serviceId: "EEEF-E90C-5339",
			displayName:
				"speech-onprem-private INTERNAL Speech-to-Text On-Prem DevTest",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EEF5-99AE-6778",
			serviceId: "EEF5-99AE-6778",
			displayName:
				"Cloud Infrastructure Services ADFS Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EEFA-EAB1-EFC8",
			serviceId: "EEFA-EAB1-EFC8",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Advanced Edition - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EF05-4791-EDA2",
			serviceId: "EF05-4791-EDA2",
			displayName: "Cognosys Inc. NGINX With CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EF22-4122-71B1",
			serviceId: "EF22-4122-71B1",
			displayName: "Striim Inc. Real-Time Data Integration to BigQuery",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EF69-AB7A-7624",
			serviceId: "EF69-AB7A-7624",
			displayName:
				"Cognosys Inc. Secured Sharepoint 2016 Enterprise on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EF87-58A5-CE3C",
			serviceId: "EF87-58A5-CE3C",
			displayName:
				"Denodo Technologies Inc. Denodo Standard 8.0 VDP on Linux (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EFB5-E52A-44B1",
			serviceId: "EFB5-E52A-44B1",
			displayName: "Frontline Hardened Ubuntu 20",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EFDD-C14E-DBFB",
			serviceId: "EFDD-C14E-DBFB",
			displayName: "Jetware MXNet 1 Python 3.6 CPU Production",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/EFEE-7A5C-9A27",
			serviceId: "EFEE-7A5C-9A27",
			displayName: "Bitnami Pootle Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F012-7646-AEC6",
			serviceId: "F012-7646-AEC6",
			displayName: "Cognosys Inc. Moodle on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F02D-128E-5CF9",
			serviceId: "F02D-128E-5CF9",
			displayName: "Genymotion Cloud: Android 7.0 (nougat)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F10F-FFC7-3589",
			serviceId: "F10F-FFC7-3589",
			displayName:
				"Cloud Infrastructure Services Packer on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F126-023F-1D57",
			serviceId: "F126-023F-1D57",
			displayName:
				"Striim Inc. Real-Time Integration to Cloud SQL for PostgreSQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F144-A965-F7CE",
			serviceId: "F144-A965-F7CE",
			displayName: "Cypherium Full Node",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F149-276F-1F76",
			serviceId: "F149-276F-1F76",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 16.04 LTS Benchmark - Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F165-4A9A-57CB",
			serviceId: "F165-4A9A-57CB",
			displayName: "Kx Systems KX Insights, kdb+ Cloud Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F17B-412E-CB64",
			serviceId: "F17B-412E-CB64",
			displayName: "App Engine",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F1E6-0C02-9078",
			serviceId: "F1E6-0C02-9078",
			displayName:
				"Cisco Systems Cisco Catalyst 9800-CL Wireless Controller for Cloud - 17.2.1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F1FF-FDAC-F127",
			serviceId: "F1FF-FDAC-F127",
			displayName:
				"Cognosys Inc. Secured Sharepoint2013 Standard on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F201-D667-AC6C",
			serviceId: "F201-D667-AC6C",
			displayName: "Google Click to Deploy ERPNext",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F235-B01A-F83C",
			serviceId: "F235-B01A-F83C",
			displayName: "Cognosys Inc. Secured Apache Solr on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F23D-CCEF-18F8",
			serviceId: "F23D-CCEF-18F8",
			displayName:
				"Pulse Secure, LLC Traffic Manager Enterprise Edition & WAF - 1 Gbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F257-99C0-20C0",
			serviceId: "F257-99C0-20C0",
			displayName: "Redis Labs Redis Enterprise Cloud",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F266-A0A1-7B2C",
			serviceId: "F266-A0A1-7B2C",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2012 R2 Benchmark v2.2.1 Level 2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F26D-7125-AE53",
			serviceId: "F26D-7125-AE53",
			displayName:
				"Cloud Infrastructure Services Apache Web Server + MySQL + phpMyadmin on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F271-8A1A-2EB9",
			serviceId: "F271-8A1A-2EB9",
			displayName: "Google Click to Deploy CouchDB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F33E-369C-A8B4",
			serviceId: "F33E-369C-A8B4",
			displayName: "superQuery",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F370-FC68-619B",
			serviceId: "F370-FC68-619B",
			displayName: "Cloudinary Dynamic Media Management Solution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F3A6-D7B7-9BDA",
			serviceId: "F3A6-D7B7-9BDA",
			displayName: "Cloud Tasks",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F3BA-58F1-EC74",
			serviceId: "F3BA-58F1-EC74",
			displayName: "Miri Infotech b2evolution",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F3BE-E276-612C",
			serviceId: "F3BE-E276-612C",
			displayName: "Cognosys Inc. MySQL 5.7 on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F3C9-2A3E-7EC6",
			serviceId: "F3C9-2A3E-7EC6",
			displayName: "Bitnami SEO Panel Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F3CE-8A7E-7CF1",
			serviceId: "F3CE-8A7E-7CF1",
			displayName: "Frontline CentOS 8",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F3EA-F8AA-4AC2",
			serviceId: "F3EA-F8AA-4AC2",
			displayName:
				"Cloud Infrastructure Services Packer on Ubuntu Server 20.04 LTS Linux",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F433-A221-553C",
			serviceId: "F433-A221-553C",
			displayName:
				"Cognosys Inc. Secured SQL Server 2016 Standard on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F49B-1414-34FD",
			serviceId: "F49B-1414-34FD",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BETTER  (PAYG, 1Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F49B-2D9F-8695",
			serviceId: "F49B-2D9F-8695",
			displayName:
				"CIS (Center for Internet Security) CIS Ubuntu Linux 16.04 Benchmark v1.0.0 Level 1",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F4A9-1AF9-D152",
			serviceId: "F4A9-1AF9-D152",
			displayName: "BeyondTrust Software, Inc. BeyondInsight",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F522-7A2F-0693",
			serviceId: "F522-7A2F-0693",
			displayName: "Cognosys Inc. Wordpress With Ubuntu Server 20.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F56F-579A-F8CC",
			serviceId: "F56F-579A-F8CC",
			displayName: "Cognosys Inc. MySQL 8.0 With CentOS 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F573-2502-2C23",
			serviceId: "F573-2502-2C23",
			displayName: "LogicMonitor",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F5C1-0C36-C810",
			serviceId: "F5C1-0C36-C810",
			displayName: "Miri Infotech zenario",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F5D1-4BA5-F253",
			serviceId: "F5D1-4BA5-F253",
			displayName: "Miri Infotech Wordpress CMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F5ED-1150-4E7B",
			serviceId: "F5ED-1150-4E7B",
			displayName: "Cognosys Inc. MySQL 5.6 on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F69D-0427-A05C",
			serviceId: "F69D-0427-A05C",
			displayName: "Miri Infotech OpenDocMan",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F6A9-3B88-B3D4",
			serviceId: "F6A9-3B88-B3D4",
			displayName:
				"Cloud Infrastructure Services osTicket Server IT Helpdesk Solution on CentOS 8.4 Server",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F6D4-20EA-70AD",
			serviceId: "F6D4-20EA-70AD",
			displayName: "Miri Infotech ImpressCMS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F6D5-9265-9580",
			serviceId: "F6D5-9265-9580",
			displayName:
				"Cisco Systems Cisco Cloud Services Router 1000V - 17.1.1 - BYOL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F6DC-2AD8-BD95",
			serviceId: "F6DC-2AD8-BD95",
			displayName: "Cognosys Inc. Secured Piwik on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F732-B3B1-F6B0",
			serviceId: "F732-B3B1-F6B0",
			displayName: "Cognosys Inc. WildFly on Ubuntu 16.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F732-B69E-DE8C",
			serviceId: "F732-B69E-DE8C",
			displayName:
				"Cognosys Inc. LAMP Server on Red Hat Enterprise Linux 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F739-AC70-5498",
			serviceId: "F739-AC70-5498",
			displayName: "Striim Inc. STRIIM  (metered)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F746-8E62-10C0",
			serviceId: "F746-8E62-10C0",
			displayName:
				"Cloud Infrastructure Services Jenkins on Windows Server 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F74B-2924-4DD3",
			serviceId: "F74B-2924-4DD3",
			displayName: "Stratus Meridian's Developer Portal for Apigee",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F76D-B710-E90C",
			serviceId: "F76D-B710-E90C",
			displayName:
				"F5 Networks F5 Adv WAF with LTM, IPI, Threat Campaigns (PAYG, 3Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F7AC-B374-A4AB",
			serviceId: "F7AC-B374-A4AB",
			displayName:
				"Cloud Infrastructure Services Ruby on Rails Server on CentOS Server 8.3",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F7CD-1EFE-EB9E",
			serviceId: "F7CD-1EFE-EB9E",
			displayName: "Bitnami MySQL with Replication",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F7E9-6A2F-C61B",
			serviceId: "F7E9-6A2F-C61B",
			displayName: "Miri Infotech Open Source Social Network",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F806-1EF0-02EF",
			serviceId: "F806-1EF0-02EF",
			displayName: "Reblaze Technologies Reblaze (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F81A-BEFE-16AA",
			serviceId: "F81A-BEFE-16AA",
			displayName: "Frontline Hardened Ubuntu 16",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F83D-6FF3-73B1",
			serviceId: "F83D-6FF3-73B1",
			displayName: "Bitnami ResourceSpace Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F8BD-5CF0-F7B4",
			serviceId: "F8BD-5CF0-F7B4",
			displayName:
				"Cloud Infrastructure Services DNS Server Windows 2019",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F8C8-9856-3C6E",
			serviceId: "F8C8-9856-3C6E",
			displayName:
				"Pulse Secure, LLC Traffic Manager Essential Edition - 10 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F8E1-110E-EFD5",
			serviceId: "F8E1-110E-EFD5",
			displayName: "Liquidware Stratusphere UX Collector (6.1.5)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F903-77E1-B3EC",
			serviceId: "F903-77E1-B3EC",
			displayName: "Panzura Inc. Panzura Freedom Filer",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F908-4554-2C79",
			serviceId: "F908-4554-2C79",
			displayName:
				"Modern Systems Modernization Platform as a Service (ModPaaS)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F910-D9D2-9BED",
			serviceId: "F910-D9D2-9BED",
			displayName: "Cognosys Inc. MySQL 5.7 on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F91A-404B-8D2E",
			serviceId: "F91A-404B-8D2E",
			displayName: "BeyondCorp Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F923-2FE1-77D7",
			serviceId: "F923-2FE1-77D7",
			displayName:
				"F5 Networks F5 Adv WAF with LTM, IPI, Threat Campaigns (PAYG, 25Mbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F950-66A4-F633",
			serviceId: "F950-66A4-F633",
			displayName: "Varnish Software Inc. Varnish Enterprise 6 (Ubuntu)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F989-1CCC-2F26",
			serviceId: "F989-1CCC-2F26",
			displayName: "MongoDB Atlas Starter",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/F98A-A936-FEBF",
			serviceId: "F98A-A936-FEBF",
			displayName: "Pluto7 Preventive Maintenance ML",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA05-E981-F7D4",
			serviceId: "FA05-E981-F7D4",
			displayName: "Mountain Fog, Inc. Philter",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA10-E134-9D2B",
			serviceId: "FA10-E134-9D2B",
			displayName: "Teradici Cloud Access Software-Graphics for CentOS 7",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA16-901A-544E",
			serviceId: "FA16-901A-544E",
			displayName: "Neo4j Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA1B-16BE-8526",
			serviceId: "FA1B-16BE-8526",
			displayName: "Contact Center AI Insights",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA26-5236-B8B5",
			serviceId: "FA26-5236-B8B5",
			displayName: "Cloud DNS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA5D-B7A1-88A7",
			serviceId: "FA5D-B7A1-88A7",
			displayName:
				"Cyxtera Cybersecurity, Inc. d/b/a AppGate AppGate SDP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FA5F-3336-B946",
			serviceId: "FA5F-3336-B946",
			displayName: "Cognosys Inc. Secured Freemind on Windows 2012 R2",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FAA8-0DAE-56FA",
			serviceId: "FAA8-0DAE-56FA",
			displayName: "Google Click to Deploy Nagios Core",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FABF-C695-973C",
			serviceId: "FABF-C695-973C",
			displayName: "Pixit Media PixStor Cloud Solo - 50 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FAC6-8116-1498",
			serviceId: "FAC6-8116-1498",
			displayName: "Google Click to Deploy DreamFactory",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FAF2-E370-4784",
			serviceId: "FAF2-E370-4784",
			displayName: "Bitnami Plone Certified by Bitnami",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FAFC-B92A-1A73",
			serviceId: "FAFC-B92A-1A73",
			displayName: "Miri Infotech nats-v2-3-4",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB27-E078-76FF",
			serviceId: "FB27-E078-76FF",
			displayName: "Aiven for MySQL",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB2F-07CC-BAC9",
			serviceId: "FB2F-07CC-BAC9",
			displayName:
				"Cloud Infrastructure Services Django Server on CentOS Server 8.4",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB3F-F8FA-6CF5",
			serviceId: "FB3F-F8FA-6CF5",
			displayName:
				"F5 Networks F5 BIG-IP Virtual Edition - BETTER  (PAYG, 10Gbps)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB65-D7BD-0287",
			serviceId: "FB65-D7BD-0287",
			displayName: "Veritas Technologies Veritas NetBackup CloudPoint",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB7A-FDE4-08A6",
			serviceId: "FB7A-FDE4-08A6",
			displayName:
				"Citrix Systems, Inc. Citrix ADC VPX Advanced Edition - 10 Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB84-3333-36CB",
			serviceId: "FB84-3333-36CB",
			displayName: "Cognosys Inc. Haproxy on Ubuntu 14.04 LTS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FB8B-D9F7-7C62",
			serviceId: "FB8B-D9F7-7C62",
			displayName: "Infogix, Inc Data360 Analyze",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FBC0-AA4A-C89A",
			serviceId: "FBC0-AA4A-C89A",
			displayName: "Cloud Dialogflow API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FBE1-9050-D6DE",
			serviceId: "FBE1-9050-D6DE",
			displayName:
				"StorageCraft Technologies Corporation StorageCraft  ShadowProtect Disaster Recovery Bundle",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FBF2-FC68-171A",
			serviceId: "FBF2-FC68-171A",
			displayName: "Security Command Center",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FBF3-D5F4-8DAE",
			serviceId: "FBF3-D5F4-8DAE",
			displayName: "Twinword Inc. Lemmatizer API",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FC28-4763-0E99",
			serviceId: "FC28-4763-0E99",
			displayName: "NS8 Protect",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FC68-9D7F-003C",
			serviceId: "FC68-9D7F-003C",
			displayName: "DataStax Enterprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FC98-BA31-7279",
			serviceId: "FC98-BA31-7279",
			displayName: "Qumulo 10TB All-Flash Qumulo File System Instance",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FCFE-DA19-6ED9",
			serviceId: "FCFE-DA19-6ED9",
			displayName: "NGINX, Inc NGINX Plus - Ubuntu 16.04",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FD10-51B1-0541",
			serviceId: "FD10-51B1-0541",
			displayName: "PerimeterX Bot Defender Mobile",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FD36-E3C7-44BD",
			serviceId: "FD36-E3C7-44BD",
			displayName:
				"Cognosys Inc. Visual Studio Professional 2015 on Windows Server 2016",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FD92-362A-08B1",
			serviceId: "FD92-362A-08B1",
			displayName: "Spectrum SAS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FE10-E224-8666",
			serviceId: "FE10-E224-8666",
			displayName: "Striim Inc. StreamShift by Striim",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FE65-6566-F37B",
			serviceId: "FE65-6566-F37B",
			displayName: "Komprise",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FE6E-4EAB-D7C1",
			serviceId: "FE6E-4EAB-D7C1",
			displayName: "Pixit Media PixStor Cloud Solo - 75 TB",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FE9A-F97C-5EF4",
			serviceId: "FE9A-F97C-5EF4",
			displayName:
				"Tecknolab DBcloudbin for SQLServer bring-your-own-license (BYOL)",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FED2-FB9B-D5ED",
			serviceId: "FED2-FB9B-D5ED",
			displayName: "Perforce Software Inc. placeholder",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FEF0-295D-9A74",
			serviceId: "FEF0-295D-9A74",
			displayName: "itopia Cloud Automation Stack",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FEF5-AB05-B216",
			serviceId: "FEF5-AB05-B216",
			displayName: "Qubole Data Service",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FEF7-5B1A-A91C",
			serviceId: "FEF7-5B1A-A91C",
			displayName: "Smallstep ACME Registration Authority for GCP CAS",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FEFC-5493-1D27",
			serviceId: "FEFC-5493-1D27",
			displayName: "Citrix Systems, Inc. Citrix SD-WAN Standard Edition",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FF14-6BB8-23F8",
			serviceId: "FF14-6BB8-23F8",
			displayName: "Fastly for GCP Marketplace",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FF44-0CD9-428C",
			serviceId: "FF44-0CD9-428C",
			displayName: "Alphaner Dive-DataOps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FF4F-E119-8E4A",
			serviceId: "FF4F-E119-8E4A",
			displayName:
				"Cloud Infrastructure Services WAMP Windows Web Server 2019 + Apache + MySQL + phpMyadmin",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FF70-CD65-E285",
			serviceId: "FF70-CD65-E285",
			displayName: "Actifio GO for GCP",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FFA5-A9B3-DF41",
			serviceId: "FFA5-A9B3-DF41",
			displayName:
				"Pulse Secure, LLC Traffic Manager Community/BYOL Edition - 10Mbps",
			businessEntityName: "businessEntities/GCP",
		},
		{
			name: "services/FFD7-4ED9-BD6B",
			serviceId: "FFD7-4ED9-BD6B",
			displayName:
				"CIS (Center for Internet Security) CIS Microsoft Windows Server 2008 R2 Benchmark - Level 2",
			businessEntityName: "businessEntities/GCP",
		},
	],
};
