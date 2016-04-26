I18n.translations || (I18n.translations = {});
I18n.translations["pt"] = I18n.extend((I18n.translations["pt"] || {}), {
  "actions": {
    "cancel": "Cancel",
    "next": "Seguinte",
    "save": "Guardar",
    "send": "Send"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Any",
    "batch_actions": {
      "action_label": "%{title} Selected",
      "button_label": "Batch Actions",
      "default_confirmation": "Are you sure you want to do this?",
      "delete_confirmation": "Are you sure you want to delete these %{plural_model}? You won't be able to undo this.",
      "labels": {
        "destroy": "Delete"
      },
      "link": "Create one",
      "selection_toggle_explanation": "(Toggle Selection)",
      "succesfully_destroyed": {
        "one": "Successfully destroyed 1 %{model}",
        "other": "Successfully destroyed %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "There are no %{resource_name} yet.",
      "link": "Create one"
    },
    "cancel": "Cancel",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Add Comment",
      "author": "Author",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Body",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Comment wasn't saved, text was empty."
      },
      "no_comments_yet": "No comments yet.",
      "resource": "Resource",
      "resource_type": "Resource Type",
      "title": "Comment",
      "title_content": "Comments (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Dashboard",
    "dashboard_welcome": {
      "call_to_action": "To add dashboard sections, checkout 'app/admin/dashboards.rb'",
      "welcome": "Welcome to Active Admin. This is the default dashboard page."
    },
    "delete": "Delete",
    "delete_confirmation": "Are you sure you want to delete this?",
    "delete_model": "Delete %{model}",
    "details": "%{model} Details",
    "devise": {
      "change_password": {
        "submit": "Change my password",
        "title": "Change your password"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Forgot your password?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Sign in",
        "sign_in_with_omniauth_provider": "Sign in with %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Remember me",
        "submit": "Login",
        "title": "Login"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Resend confirmation instructions",
        "title": "Resend confirmation instructions"
      },
      "reset_password": {
        "submit": "Reset My Password",
        "title": "Forgot your password?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Resend unlock instructions",
        "title": "Resend unlock instructions"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Download:",
    "dropdown_actions": {
      "button_label": "Actions"
    },
    "edit": "Edit",
    "edit_model": "Edit %{model}",
    "empty": "Empty",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Clear Filters",
        "filter": "Filter"
      },
      "predicates": {
        "contains": "Contains",
        "ends_with": "Ends with",
        "equals": "Equals",
        "greater_than": "Greater than",
        "less_than": "Less than",
        "starts_with": "Starts with"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Delete",
    "has_many_new": "Add New %{model}",
    "has_many_remove": "Remove",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Logout",
    "main_content": "Please implement %{model}#main_content to display content.",
    "new_model": "New %{model}",
    "next": "Next",
    "pagination": {
      "empty": "No %{model} found",
      "entry": {
        "one": "entry",
        "other": "entries"
      },
      "multiple": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total",
      "multiple_without_total": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Displaying <b>1</b> %{model}",
      "one_page": "Displaying <b>all %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Previous",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filters",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "No",
      "yes": "Yes"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "View"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Address",
        "address_city": "City",
        "address_housenumber": "Número de casa",
        "address_postcode": "Postcode",
        "address_street": "Street",
        "name": "Name",
        "note": "Note",
        "phone": "Phone",
        "type": "Type",
        "website": "Website"
      },
      "user": {
        "first_name": "Given name",
        "last_name": "Last name",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute}%{message}"
      },
      "messages": {
        "accepted": "tem de ser aceite",
        "blank": "não pode estar em branco",
        "confirmation": "não coincide com a confirmação",
        "empty": "não pode estar vazio",
        "equal_to": "tem de ser igual a %{count}",
        "even": "tem de ser par",
        "exclusion": "é reservado",
        "greater_than": "tem de ser maior que %{count}",
        "greater_than_or_equal_to": "tem de ser maior ou igual a %{count}",
        "inclusion": "não está incluído na lista",
        "invalid": "é inválido",
        "less_than": "tem de ser menor que %{count}",
        "less_than_or_equal_to": "tem de ser menor ou igual a %{count}",
        "not_a_number": "não é um número",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "tem de ser ímpar",
        "record_invalid": "A validação falhou: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "não está disponível",
        "too_long": "é demasiado grande (o mínimo é de %{count} characters)",
        "too_short": "é demasiado pequeno (o mínimo é de %{count} caracteres)",
        "wrong_length": "comprimento errado (deve ter %{count} caracteres)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "can't be blank if password is given"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "E-mail",
          "password": "Palavra Passe",
          "remember_me": "Manter-se ligado à conta"
        }
      },
      "template": {
        "body": "Por favor, verifique os seguintes campos:",
        "header": {
          "one": "Não foi possível guardar %{model}: 1 erro",
          "other": "Não foi possível guardar %{model}: %{count} erros"
        }
      }
    },
    "models": {
      "user": "User"
    }
  },
  "apipie": {
    "api_documentation": "API documentation",
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "description": "Description",
    "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errors",
    "examples": "Examples",
    "follow_instructions_href": "further instructions",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "goto_homepage_href": "%{app_name} API documentation homepage",
    "goto_homepage_html": "Try going to %{href}",
    "header_name": "Header name",
    "headers": "Headers",
    "metadata": "Metadata",
    "method_not_found_html": "Method %{method} not found for resource %{resource}.",
    "nil_allowed": "nil allowed",
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "oops": "Oops!!",
    "optional": "optional",
    "param_name": "Param name",
    "params": "Params",
    "required": "required",
    "resource": "Resource",
    "resource_not_found_html": "Resource %{resource} not found.",
    "resources": "Resources",
    "supported_formats": "Supported Formats"
  },
  "application": {
    "require_no_user": {
      "notice": "Já está ligado à sua conta"
    },
    "require_user": {
      "notice": "Tem de se ligar à sua conta para ver o conteúdo desta página."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Adicionar um novo local",
      "edit": "Editar um lugar"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "fechar",
    "skip": "skip"
  },
  "date": {
    "abbr_day_names": [
      "Dom",
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sáb"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    "day_names": [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ],
    "formats": {
      "default": "%d/%m/%Y",
      "long": "%d de %B de %Y",
      "short": "%d de %B"
    },
    "month_names": [
      null,
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "aproximadamente 1 hora",
        "other": "aproximadamente %{count} horas"
      },
      "about_x_months": {
        "one": "aproximadamente 1 mês",
        "other": "aproximadamente %{count} meses"
      },
      "about_x_years": {
        "one": "aproximadamente 1 ano",
        "other": "aproximadamente %{count} anos"
      },
      "almost_x_years": {
        "one": "quase 1 ano",
        "other": "quase %{count} years"
      },
      "half_a_minute": "meio minuto",
      "less_than_x_minutes": {
        "one": "menos de um minuto",
        "other": "menos de %{count} minutos"
      },
      "less_than_x_seconds": {
        "one": "menos de 1 segundo",
        "other": "menos de %{count} segundos"
      },
      "over_x_years": {
        "one": "mais de 1 ano",
        "other": "mais de %{count} anos"
      },
      "x_days": {
        "one": "1 dia",
        "other": "%{count} dias"
      },
      "x_minutes": {
        "one": "1 minuto",
        "other": "%{count} minutos"
      },
      "x_months": {
        "one": "1 mês",
        "other": "%{count} meses"
      },
      "x_seconds": {
        "one": "1 segundo",
        "other": "%{count} segundos"
      }
    },
    "prompts": {
      "day": "Dia",
      "hour": "Hora",
      "minute": "Minuto",
      "month": "Mês",
      "second": "Segundo",
      "year": "Ano"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "A sua conta está confirmada. Está agora ligado à sua conta.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Receberá dentro de minutos um e-mail com intruções de como confirmar a sua conta.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Tem a certeza?",
      "headline": "Delete account",
      "link": "Apagar agora"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Palavra passe actual <i> (precisamos do seguinte para confirmar a alteração) </i>",
          "email": "E-mail",
          "password": "Palavra passe <i> (deixar em branco se não quiser mudar) </i>",
          "password_confirmation": "Repita a palavra passe"
        },
        "submit": "Gravar mudanças"
      },
      "headline": "Opções da conta"
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Palavra passe ou Email inválido. ",
      "invalid_token": "d",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "A sua conta está bloqueada.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Voçê tem de se registrar antes de poder continuar.  ",
      "unconfirmed": "Voçê tem de confirmar a sua conta antes de continuar."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Confirmação das instruções"
      },
      "reset_password_instructions": {
        "subject": "Restabelecer as intruções sobre a palavra passe"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* campo obrigatório",
    "omniauth_callbacks": {
      "failure": "não pôde ser confirmado de  %{kind} porque \"%{reason}",
      "permission_missing": "You did not grant the required permission.",
      "success": "Autorizado com sucesso de %{kind} conta"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Restabelecer a sua palavra passe"
      },
      "headline": "Esqueceu-se da senha?"
    },
    "password_reset": {
      "email": {
        "comment": "Se não pediu para alterar a sua palavra passe, por favor ignore este mail <br/>. A sua palavra passe não será alterada a não ser que carregue no seguinte link.",
        "headline": "Bem vindo %{email}",
        "link": "Mudar a palavra passe",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nova palavra passe",
          "password_confirmation": "Repita a palavra passe"
        },
        "submit": "Restabelecer a palavra passe"
      },
      "headline": "Restabelecer a palavra passe"
    },
    "passwords": {
      "link": "Esquececeu-se da palavra passe?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "A sua palavra passe foi alterada con sucesso. Está agora ligado à sua conta.",
      "updated_not_active": "Your password was changed successfully"
    },
    "registrations": {
      "destroyed": "Adeus! A sua conta foi cancelada com sucesso. Até breve.",
      "inactive_signed_up": "You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"",
      "link": "Criar conta",
      "reasons": {
        "inactive": "inactive",
        "locked": "locked",
        "unconfirmed": "unconfirmed"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "A actualização da sua conta decorreu com sucesso"
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "E-mail ou palavra passe inválida ",
      "invalid_token": "Ficha de autentificação inválida",
      "link": "Entrar na conta",
      "locked": "A sua conta está bloqueada",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Entrou na conta com sucesso",
      "signed_out": "Saiu da conta com sucesso",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Tem de criar uma conta ou entrar na sua conta para continuar.",
      "unconfirmed": "Tem de confirmar a sua conta antes de continuar"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Palavra passe",
          "remember_me": "manter-se ligado à sua conta"
        },
        "submit": "entrar"
      },
      "headline": "Entrar"
    },
    "sign_out": {
      "headline": "Sair"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Palavra passe",
          "password_confirmation": "Repita a palavra passe",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Registrar-se"
      },
      "headline": "Registrar-se"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "A sua conta foi desbloqueada com sucesso. Está agora ligado(a) à sua conta"
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "já estava confirmado, por favor volte a registrar-se",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "não coincide com a confirmação",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "tem de ser igual a %{count}",
      "even": "must be an even number",
      "exclusion": "é reservado",
      "expired": "expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "tem de ser maior que %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "não está incluído na lista",
      "invalid": "é inválido",
      "less_than": "tem de ser menor que %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "não é um número",
      "not_an_integer": "tem de ser um número integral",
      "not_found": "não foi encontrado",
      "not_locked": "não estava bloqueado",
      "not_saved": {
        "one": "Um erro impdiu que %{resource} fosse salvo:",
        "other": "%{count} erros impediu que %{resource} fossem salvos :"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "já pertence a outra pessoa",
      "too_long": "é demasiado grande (o mínimo é de %{count} characters)",
      "too_short": "é demasiado pequeno (o mínimo é de %{count} caracteres)",
      "wrong_length": "comprimento errado (deve ter %{count} caracteres)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Houve problemas com os seguintes campos: ",
      "header": {
        "one": "Um erro impdiu que %{model} fosse salvo:",
        "other": "%{count} erros impediu que %{model} fossem salvos :"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."
    },
    "headline": "Is there a problem with this place?",
    "questions": {
      "0": "The marking is wrong.",
      "1": "The details of the place are incorrect or missing.",
      "2": "I have more information about this place."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} foi criado com sucesso."
      },
      "destroy": {
        "alert": "%{resource_name} não pode ser eliminado. ",
        "notice": "%{resource_name} foi eliminado com sucesso"
      },
      "update": {
        "notice": "%{resource_name} foi actualizado com sucesso"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "acessível a cadeira de rodas",
    "show_limited_accessible_places": "Parcialmente acessível por cadeira de rodas",
    "show_places_without_status": "Estado desconhecido",
    "show_unaccessible_places": "Sem acesso a cadeiras de rodas"
  },
  "formtastic": {
    "cancel": "Cancelar %{model}",
    "create": "Criar %{model}",
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Coloque o inicador que se encontra no mapa para a posição correcta ",
      "osm_username": "Ainda não é membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Criar uma conta Openstreetmp agora</a>",
      "password": "(deixe em branco se não quiser mudar) ",
      "phone": "For example: +49 30 12345678",
      "website": "p. ex. http://www.example.com"
    },
    "labels": {
      "category": "Categoria:",
      "centralkey": "Central key:",
      "city": "Cidade:",
      "create": "Create a place",
      "email": "E-mail",
      "finish": "Finish",
      "housenumber": "Nr:",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Nome:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Palavra passe",
      "password_confirmation": "Repita a palavra passe",
      "phone": "Telefone:",
      "postcode": "código postal:",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "Reset",
      "save": "Guardar",
      "street": "Rua:",
      "terms": "I accept the terms of use.",
      "type": "Tipo",
      "website": "Website",
      "wheelchair": "Acessibilidade para cadeira de rodas?",
      "wheelchair_description": "Comentário sobre a acessibilidade: ",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "no": "Não",
    "required": "obrigatório",
    "reset": "Resetar %{model}",
    "submit": "Salvar %{model}",
    "titles": {
      "basic": "Data base ",
      "optional": "Mais informação <span class=\"addition\">(all fields are optional)</span>"
    },
    "update": "Atualizar %{model}",
    "yes": "Sim"
  },
  "global": {
    "form_validation_error": "Por favor tome atenção aos erros mencionados em baixo."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Homepage",
      "keywords": "lugares acessíveis a cadeira de rodas procurar indicador de procura",
      "search": "Procurar",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "Blog",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "Feedbck",
      "home": "Iniciar",
      "how_to_add_a_place": "Como adicionar lugares?",
      "imprint": "Imprimir",
      "logged_in_as": "Registrado como:",
      "login": "Entrar",
      "logout": "Sair",
      "map": "Map",
      "newsletter": "Newsletter",
      "press": "Imprensa",
      "profile": "Profile",
      "projects": "Projects",
      "suggestions": "Sugestões",
      "what_is_barrier_free": "Qual o significado de \"acessível a cadeira de rodas\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Adicionar outro lugar",
      "find": "encontrar",
      "placeholder": "p. Ex. Sunset Boulevard L.A. ou o Portão de Brandenburgo",
      "title_add_place": "Adicionar um novo lugar nesta posição agora!"
    },
    "tagline": "Lógotipo do Wheelmap",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Categories"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"
      },
      "one_page": {
        "display_entries": {
          "one": "Displaying <b>%{count}</b> %{entry_name}",
          "other": "Displaying <b>all %{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Por favor seleccione"
    },
    "submit": {
      "create": "Criar  %{model}",
      "submit": "Guardar  %{model}",
      "update": "Actualizar  %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Categoria:",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "Acessivel a cadeira de rodas? (O que significa isto?) "
      },
      "ie": {
        "action": {
          "ignore": "Ignore",
          "upgrade": "Update Browser"
        },
        "warning": {
          "headline": "We apologise!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Adicionar um novo local"
        }
      },
      "overlay": {
        "button": "Okay, let’s go!",
        "categories": "Filter places by categories",
        "filter": "Filter places by wheelchair accessibility",
        "headline": "Mark and find wheelchair accessible places with Wheelmap.org - worldwide and for free. It’s easy:",
        "lookup": "Search for a specific place",
        "secondary_headline": "Our traffic light system to mark the wheelchair accessibility of public places:"
      },
      "popup": {
        "form": {
          "limited": "Parcialmente acessível por cadeira de rodas",
          "no": "Sem acesso a cadeiras de rodas",
          "save": "Update",
          "unknown": "Estado desconhecido",
          "yes": "acessível a cadeira de rodas"
        },
        "help": "Wheelchair accessible? (Help)",
        "more": "more ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "How?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "All partially wheelchair accessible %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "All not wheelchair accessible %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "All %{type} in %{city} with unknown wheelchair status (%{count})"
        },
        "yes": {
          "headline": "All wheelchair accessible %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Um projecto de Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Choose a category"
    },
    "node": {
      "info_edit_position": "The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>",
      "mail": {
        "body": "(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem with %{headline}"
      }
    },
    "node_type": {
      "prompt": "Choose a type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefone:",
      "website": "site na Web:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, os dados introduzido estão incorrectos ou incompletos",
        "successfull": "Muito obrigado, os dados submetidos foram guardados com sucesso e estarão online em breve. "
      }
    },
    "edit": {
      "header": {
        "title": "Edit place: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Desculpe, a autentificação falhou",
      "not_available": "Desculpe, mas esta página não está de momento acessível",
      "not_existent": "Desculpe, este lugar já não está mais acessível",
      "not_found": "Desculpe, a página não foi encontrada",
      "param_missing": "Por Favor introduza um termo para procura"
    },
    "flash": {
      "authorize_wheelmap": "Você precisa de uma conta OpenStreetMap para alterar os dados."
    },
    "new": {
      "form": {
        "legend": "Location of the place",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Endereço",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contact",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and place type",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Is all the information correct?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Similar places",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Novo lugar | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "node": {
      "link": {
        "claim": "Do you work here?",
        "edit_node": "Editar lugar",
        "report_bug": "Report a problem"
      }
    },
    "node_data": {
      "address": "Address:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "Details",
      "edit": "Edit"
    },
    "node_map": {
      "map": "Map:"
    },
    "node_note": {
      "comment": "Comment:"
    },
    "node_photos": {
      "add": "Add",
      "alert": "Please note: The entrance should be clearly visible in the photo in order to show the following: Are there steps at the entrance? Approximately how high is the step? How wide is the door? The photograph must be in a JPG or PNG format. It should not be larger than 10 MB.",
      "photos_of_this_place": "Photos of this place:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Similar places: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Wheelchair accessible toilet:",
      "premium": "%{name} says: this place is",
      "wheelchair_accessibility": "Wheelchair accessibility:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Place: %{node} | wheelmap.org"
      },
      "link": {
        "back": "back",
        "large_map": "Aumentar",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "E-mail",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, os dados introduzido estão incorrectos ou incompletos",
        "successfull": "Muito obrigado, os dados submetidos foram guardados com sucesso e estarão online em breve. "
      }
    },
    "update_wheelchair": {
      "successfull": "The status for \"%{name}\" has been changed to \"%{status}\" and will be online shortly."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ".",
        "format": "%u%n",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "€"
      }
    },
    "format": {
      "delimiter": ".",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Bilhão",
          "million": "Milhão",
          "quadrillion": "Quatrilhão",
          "thousand": "Mil",
          "trillion": "Trilhão",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "You need to connect your account with your OpenStreetMap account before you can create or modify places on Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Your Wheelmap account is now connected to the OpenStreetMap account %{user}."
    }
  },
  "or": "ou",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "Acomodação ",
      "education": "Ecucação ",
      "food": "Comida",
      "government": "Governo",
      "health": "Health",
      "leisure": "Prazer",
      "misc": "Outros",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Shopping",
      "sport": "Desporto",
      "tourism": "Turismo",
      "unknown": "Desconhecido"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel Praia",
        "bed_and_breakfast": "Bed and Breakfast",
        "camp_site": "Acampamento",
        "caravan_site": "Sitio de caravana",
        "chalet": "Chalet",
        "dormitory": "Dormitory",
        "guest_house": "Guest House",
        "hostel": "Pousada",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Colégio",
        "driving_school": "Driving school",
        "kindergarten": "Jardim escola",
        "library": "Biblioteca",
        "museum": "Museu",
        "school": "Escola",
        "university": "Universidade"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Bar de cerveja",
        "cafe": "café",
        "drinking_water": "Agua potável",
        "fast_food": "Fast food",
        "ice_cream": "Ice cream parlour",
        "pub": "Pub",
        "restaurant": "Restaurante"
      },
      "government": {
        "courthouse": "Tribunal",
        "embassy": "Embaixada",
        "employment_agency": "Employment agency",
        "government": "Government agency",
        "police": "Police",
        "public_building": "Edificio público",
        "townhall": "Town hall"
      },
      "health": {
        "alternative": "Alternative medicine practitioner",
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "Hearing aid dealer",
        "hospital": "Hospital",
        "medical_supply": "Medical supplies",
        "occupational_therapist": "Occupational therapist",
        "pharmacy": "Farmácia",
        "physiotherapist": "Physiotherapist",
        "psychotherapist": "Psychotherapist",
        "social_facility": "Social facility",
        "speech_therapist": "Speech therapist",
        "veterinary": "Veterenário"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Brothel",
        "casino": "Casino",
        "cinema": "Cinema",
        "community_centre": "Community centre",
        "gallery": "Galeria",
        "massage": "Massage spa",
        "nightclub": "Clube Nocturno",
        "playground": "Playground",
        "sauna": "Sauna",
        "stripclub": "Stripclub",
        "tattoo": "Tattoo shop",
        "theatre": "Teatro",
        "zoo": "Zoológico"
      },
      "misc": {
        "association": "Association",
        "company": "Company (Office)",
        "estate_agent": "Real estate agent",
        "insurance": "Insurance",
        "lawyer": "Lawyer",
        "ngo": "Non-government organisation",
        "place_of_worship": "Lugar de oração ",
        "political_party": "Political party office",
        "toilets": "Casa de banho"
      },
      "money_post": {
        "atm": "Caixa Multibanco",
        "bank": "Banco",
        "bureau_de_change": "Loja de Cambio",
        "post_box": "Caixa de Correio",
        "post_office": "Correios"
      },
      "public_transfer": {
        "aerodrome": "Aeroporto",
        "bicycle_parking": "Parque para bicicletas",
        "bicycle_rental": "Aluguer de bicicletas",
        "boatyard": "Boat yard",
        "bus_station": "Estação de Autocarros",
        "bus_stop": "Estação de Autocarros",
        "cable_car": "Teleférico",
        "car_rental": "Aluguer de carros",
        "car_sharing": "Car sharing",
        "chair_lift": "Elevador",
        "ferry": "Ferry",
        "ferry_terminal": "Terminal Ferry",
        "fuel": "Bomba de gasolina",
        "halt": "Estação ",
        "light_rail": "Metro",
        "parking": "Parque de estacionamento",
        "parking_aisle": "Lugar de estacionamento",
        "platform": "Plataforma",
        "station": "Metro",
        "subway_entrance": "Entrada do Metro ",
        "terminal": "Terminal de Aeroporto ",
        "tram_stop": "Estação de eléctrico"
      },
      "shopping": {
        "alcohol": "Licor",
        "bakery": "Padaria",
        "beauty": "Beauty salon",
        "beverages": "Bebidas",
        "bicycle": "Loja de bicicletas",
        "books": "Livros",
        "butcher": "Talho",
        "car_repair": "Car repair",
        "car_shop": "Car shop",
        "chemist": "Chemist / Drugstore",
        "clothes": "Roupa",
        "computer": "Computador",
        "confectionery": "Candy store",
        "convenience": "Conveniência",
        "deli": "Delicatessen",
        "department_store": "Shopping Center",
        "doityourself": "Faça você mesmo",
        "dry_cleaning": "Limpeza a seco",
        "electronics": "Eletrónica",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "Florista",
        "furniture": "Móvéis",
        "garden_centre": "Garden centre",
        "gift": "Gift shop",
        "hairdresser": "Cabeleireiro",
        "hardware": "Hardware",
        "jewelry": "Jewelry",
        "kiosk": "Quisque",
        "laundry": "Lavandaria",
        "mall": "Shopping Center",
        "optician": "Óptica",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "Photo",
        "second_hand": "Second hand",
        "shoes": "Sapatos",
        "sports": "Sports",
        "stationery": "Stationery",
        "supermarket": "Supermercado",
        "toys": "Toys",
        "travel_agency": "Travel agency",
        "video": "Video rental store"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "Centro de desporto",
        "stadium": "Estádio",
        "swimming": "Nadar",
        "swimming_pool": "Piscina"
      },
      "tourism": {
        "archaeological_site": "Local arqueológico",
        "arts_centre": "centro de artes",
        "artwork": "Obra de arte",
        "attraction": "Atracção",
        "battlefield": "Campo de batalha",
        "beach": "Praia",
        "beacon": "Farol",
        "castle": "castelo",
        "cave_entrance": "Entrada da caverna",
        "information": "Informação para turistas",
        "memorial": "Memorial",
        "theme_park": "Parque temático",
        "tower": "Torre",
        "viewpoint": "Ponto de vista"
      },
      "unknown": {
        "unknown": "Desconhecido"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Estado: Ligado",
          "grant": "Ligar agora",
          "not_connected": "Estado: Desligado",
          "revoke": "Desligar "
        }
      },
      "headline": "Editar o seu profil"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Sorry, we couldn’t find a place called \"%{query}\".",
        "hint": {
          "example": "<strong>Example:</strong> London, United Kingdom",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Please provide more <strong>address details</strong>.",
          "intro": "Try this:",
          "spell_check": "Check the <strong>spelling</strong> of your input."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} results:"
        }
      },
      "search": {
        "for": "Procurando \"%{q}",
        "not_found": "Não foi possível encontrar um lugar"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} places have already been marked.",
    "headline": "Everyone can add wheelchair accessible places!",
    "start": "Iniciar",
    "step1": "Click on a place you know",
    "step2": "Mark it and click save",
    "step3": "That's it! No registration necessary",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Estatísticas",
  "support": {
    "array": {
      "last_word_connector": ", e",
      "sentence_connector": "e",
      "two_words_connector": " e ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Por favor seleccione"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%A, %d de %B de %Y, %H:%Mh",
      "long": "%A, %d de %B de %Y, %H:%Mh",
      "short": "%d/%m, %H:%M hs"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "No wheelchair accessible toilet",
    "unknown": "Toilet status unknown",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Wheelchair accessible toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "A sua conta está agora activa."
      },
      "error": {
        "notice": "E-Mail e palavra passe não correspondem"
      },
      "notice": "Você está dentro!"
    },
    "destroy": {
      "notice": "Adeus, até breve!"
    },
    "new": {
      "email": "Email address",
      "login": "Log in",
      "login_with_twitter": "Log in com Twitter",
      "password": "Palavra passe",
      "remember_me": "Mantenha-se connectado"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "How can we get in touch with you? You can change this information later in your profile."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Your uploaded images"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profile"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Photos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hello there",
          "personalized": "Hello %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "uploaded %{count} photos"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "added %{count} places"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "marked %{count} places"
          },
          "text": "You have"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Overview"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Height",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Preview",
          "settings": "Definições"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; First",
      "last": "Last &raquo;",
      "next": "Next &rsaquo;",
      "previous": "&lsaquo; Prev",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Parcialmente acessível por cadeira de rodas",
    "no": "Sem acesso a cadeiras de rodas",
    "unknown": "Estado desconhecido",
    "yes": "acessível a cadeira de rodas"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Become a supporter",
      "main_supporter": "Main supporter"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Faça agora o download do seu iPhone App!"
    },
    "logo": {
      "alt": "Wheelmap Logo - encontre lugares com acessibilidade para cadeira de rodas",
      "title": "Wheelmap - encontre lugares com acessibilidade para cadeira de rodas"
    },
    "what_is": {
      "fully_accessible": "Entrada sem degraus, nenhuma das divisões tem degraus.",
      "limited_accessible": "A entrada tem um degrau, com altura máxima de 7 cm (3 pol), a maior parte das divisões não têm degraus.",
      "not_accessible": "A entrada tem um degrau ou vários degraus, as divisões não são acessíveis.",
      "unknown_accessible": "Ajude, assinalando locais!"
    }
  },
  "will_paginate": {
    "next_label": "Next &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
      "single_page": {
        "one": "Displaying 1 %{model}",
        "other": "Displaying all %{count} %{model}",
        "zero": "No %{model} found"
      },
      "single_page_html": {
        "one": "Displaying <b>1</b> %{model}",
        "other": "Displaying <b>all&nbsp;%{count}</b> %{model}",
        "zero": "No %{model} found"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Previous"
  }
});
