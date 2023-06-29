export let animations = {
    "cellphone@": {
        "out": {
            "text": "cellphone_text_in",
            "call": "cellphone_call_listen_base",
        },
        "text": {
            "out": "cellphone_text_out",
            "text": "cellphone_text_in",
            "call": "cellphone_text_to_call",
                  
        },
        "call": {
            "out": "cellphone_call_out",
            "text": "cellphone_call_to_text",
            "call": "cellphone_text_to_call",
        }
    },
    "anim@cellphone@in_car@ps": {
        "out": {
            "text": "cellphone_text_in",
            "call": "cellphone_call_in",
        },
        "text": {
            "out": "cellphone_text_out",
            "text": "cellphone_text_in",
            "call": "cellphone_text_to_call",
        },
        "call": {
            "out": "cellphone_horizontal_exit",
            "text": "cellphone_call_to_text",
            "call": "cellphone_text_to_call",
        }
    },
}