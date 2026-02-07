"use client"

import {CheckCircle2, Info, LucideIcon, Trash2, TriangleAlert, XCircle} from "lucide-react"
import {toast} from "sonner"
import {ElementType, ReactNode} from "react"

export type ToastType = "success" | "delete" | "error" | "warning" | "info"

type ToastIcon = LucideIcon | ElementType | ReactNode

interface ShowToastProps {
    type?: ToastType
    message: string
    title?: string
    description?: string
    icon?: ToastIcon
    duration?: number
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
}

const DEFAULT_ICONS: Record<ToastType, LucideIcon> = {
    success: CheckCircle2,
    delete: Trash2,
    error: XCircle,
    warning: TriangleAlert,
    info: Info,
}

const renderIcon = (icon: ToastIcon | undefined, DefaultIcon: LucideIcon) => {
    if (!icon) {
        return <DefaultIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    }

    if (typeof icon === "function") {
        const IconComponent = icon as ElementType
        return <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    }

    return icon
}

export function showToast({
                              type = "success",
                              message,
                              title,
                              description,
                              icon,
                              duration = 4000,
                              position,
                          }: ShowToastProps) {
    const toastOptions = {
        description,
        icon: renderIcon(icon, DEFAULT_ICONS[type]),
        duration,
        position,
        className: "text-sm sm:text-base",
        descriptionClassName: "text-xs sm:text-sm",
    }

    switch (type) {
        case "delete":
            toast.error(message, {
                ...toastOptions,
                description: description ?? (title ? `${title} deleted successfully` : undefined),
            })
            break

        case "error":
            toast.error(message, toastOptions)
            break

        case "warning":
            toast.warning(message, toastOptions)
            break

        case "info":
            toast.info(message, toastOptions)
            break

        case "success":
        default:
            toast.success(message, {
                ...toastOptions,
                description: description ?? (title ? title : undefined),
            })
            break
    }
}